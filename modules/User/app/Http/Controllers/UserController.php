<?php

namespace Modules\User\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Laravel\Fortify\Rules\Password;
use Modules\User\DataTables\UserDataTable;

class UserController extends Controller
{
    /**
     * Constructor for the controller.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'permission:user_management', 'status_check']);
        $this->middleware('request:ajax', ['only' => ['destroy', 'statusUpdate']]);
        $this->middleware('strip_scripts_tag')->only(['store', 'update']);
        \cs_set('theme', [
            'title' => 'User List',
            'description' => 'Displaying all Users.',
            'back' => \back_url(),
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ],
                [
                    'name' => 'Users List',
                    'link' => false,
                ],
            ],
            'rprefix' => 'admin.user',
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(UserDataTable $dataTable)
    {
        return $dataTable->render('user::index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\view\View
     */
    public function create()
    {
        \cs_set('theme', [
            'title' => 'Create New User',
            'description' => 'Creating new User.',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ],
                [
                    'name' => 'Users List',
                    'link' => \route('admin.user.index'),
                ],
                [
                    'name' => 'User Create New User',
                    'link' => false,
                ],
            ],
        ]);

        return \view('user::create_edit');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'phone' => 'nullable|string|max:255|unique:users,phone',
            'password' => 'required|string',
            new Password(),
            'confirmed',
            'role' => 'required|integer|exists:roles,id',
            'status' => 'required|in:' . implode(',', array_keys(User::statusList())),
            'age' => 'nullable|integer',
            'address' => 'nullable|string|max:255',
            'gender' => 'nullable|in:' . implode(',', array_keys(User::genderList())),
            'permissions' => 'nullable|array',
        ]);

        if ($request->hasFile('avatar')) {
            $request->validate([
                'avatar' => 'image',
            ]);

            $data['profile_photo_path'] = $request->avatar->store('users');
        }

        // password hash
        $data['password'] = Hash::make($data['password']);

        $user = User::create($data);
        $user->syncRoles(intval($data['role']));
        // $data['permissions']  convert all to intval
        $data['permissions'] = array_map('intval', $data['permissions'] ?? []);
        $user->syncPermissions($data['permissions']);

        // flash message
        Session::flash('success', 'Successfully Stored new user data.');

        return \redirect()->route(config('theme.rprefix') . '.index');
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\view\View
     */
    public function show(User $user)
    {
        \cs_set('theme', [
            'title' => 'User Information',
            'description' => 'Display Single User Information.',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ],
                [
                    'name' => 'Users List',
                    'link' => \route('admin.user.index'),
                ],
                [
                    'name' => 'User Information',
                    'link' => false,
                ],
            ],
        ]);

        return \view('user::show', \compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\view\View
     */
    public function edit(User $user)
    {
        \cs_set('theme', [
            'title' => 'Edit User Information',
            'description' => 'Edit existing user data.',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ],
                [
                    'name' => 'Users List',
                    'link' => \route('admin.user.index'),
                ],
                [
                    'name' => 'Edit User Information',
                    'link' => false,
                ],
            ],
        ]);

        return view('user::create_edit', ['item' => $user]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id . ',id',
            'phone' => 'nullable|string|max:255|unique:users,phone,' . $user->id . ',id',
            'role' => 'required|integer|exists:roles,id',
            'status' => 'required|in:' . implode(',', array_keys(User::statusList())),
            'age' => 'nullable|integer',
            'address' => 'nullable|string|max:255',
            'gender' => 'nullable|in:' . implode(',', array_keys(User::genderList())),
            'permissions' => 'nullable|array',
        ]);

        if ($request->password) {
            $request->validate([
                'password' => ['required', 'string', new Password(), 'confirmed'],
            ]);
            $data['password'] = Hash::make($request->password);
        } else {
            unset($data['password']);
        }

        if ($request->hasFile('avatar')) {
            $request->validate([
                'avatar' => 'image',
            ]);

            $data['profile_photo_path'] = $request->avatar->store('users');
            $user->profile_photo_path ? Storage::delete($user->profile_photo_path) : null;
        }

        $user->update($data);

        if (auth()->user()->id != $user->id) {
            $user->syncRoles(intval($data['role']));
            // $data['permissions']  convert all to intval
            $data['permissions'] = array_map('intval', $data['permissions'] ?? []);
            $user->syncPermissions($data['permissions']);
        } else {
            $user->status = 'Active';
            $user->save();
            Session::flash('error', 'You Can\'t Updated Your User Account Status Or Role.');
        }

        // flash message
        Session::flash('success', 'Successfully Updated user account.');

        return \redirect()->route(config('theme.rprefix') . '.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {

        if (auth()->user()->id == $user->id) {
            Session::flash('error', 'You can\'t delete your account.');

            return response()->error('', 'You can\'t delete your account.', 403);
        }

        $user->delete();
        Session::flash('success', 'Successfully deleted user account.');

        return response()->success('', 'Successfully deleted user account.', 200);
    }

    /**
     * View Use Profile
     *
     * @return \Illuminate\view\View
     */
    public function profile()
    {
        \cs_set('theme', [
            'title' => 'Profile',
            'description' => 'User Profile Information',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ],
                [
                    'name' => 'Profile',
                    'link' => false,
                ],
            ],
        ]);

        return view('user::show', ['user' => auth()->user(), 'profile' => true]);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function statusUpdate(User $user, Request $request)
    {
        $status = $user->status;

        if (\auth()->user()->id == $user->id) {
            return \response()->error([], 'You can\'t update your account status.', 403);
        }

        $user->update(['status' => $request->status]);

        return \response()->success($user, 'User Status Updated Successfully.', 200);
    }
}
