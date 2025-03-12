<?php

namespace Modules\Role\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Session;
use Modules\Role\DataTables\RoleDataTable;
use Modules\Role\Models\Role;

class RoleController extends Controller
{
    /**
     * Constructor for the controller.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'permission:role_management']);
        $this->middleware('request:ajax', ['only' => ['destroy']]);
        $this->middleware('strip_scripts_tag')->only(['store', 'update']);
        \cs_set('theme', [
            'title' => 'Role Lists',
            'description' => 'Display a listing of roles in Database.',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ],
                [
                    'name' => 'Role Lists',
                    'link' => false,
                ],
            ],
            'rprefix' => 'admin.role',
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(RoleDataTable $dataTable)
    {
        return $dataTable->render('role::index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\view\View
     */
    public function create()
    {
        \cs_set('theme', [
            'title' => 'Create New Role',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ],
                [
                    'name' => 'Role List',
                    'link' => \route('admin.role.index'),
                ],

                [
                    'name' => 'Create New Role',
                    'link' => false,
                ],
            ],
            'description' => 'Create new role in a database.',
        ]);

        return view('role::create_edit');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255', 'unique:roles,name'],
        ]);
        // return $request->all();
        $role = Role::create([
            'name' => \ucfirst($request->name),
        ]);
        // convert all permissions to array to integer
        $permissions = array_map('intval', $request->permissions ?? []);

        $role->syncPermissions($permissions);
        // flash message
        Session::flash('success', 'Successfully Stored new role data.');

        return \redirect()->route(config('theme.rprefix') . '.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\view\View
     */
    public function edit(Role $role)
    {
        \cs_set('theme', [
            'title' => 'Edit Role Information',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ],
                [
                    'name' => 'Role Table',
                    'link' => \route('admin.role.index'),
                ],

                [
                    'name' => 'Edit Role Information',
                    'link' => false,
                ],
            ],
            'description' => 'Edit existing role data.',
            'edit' => route(config('theme.rprefix') . '.update', $role->id),
        ]);

        return view('role::create_edit', ['item' => $role]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $role)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:roles,name,' . $role->id . ',id',
            'permission' => 'nullable|array',
        ]);
        $role->update([
            'name' => ucfirst($request->name),
        ]);
        // convert all permissions to array to integer
        $permissions = array_map('intval', $request->permissions ?? []);

        $role->syncPermissions($permissions);
        // flash message
        Session::flash('success', 'Successfully Updated role data.');

        return \redirect()->route(config('theme.rprefix') . '.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {

        $role->delete();        // flash message
        Session::flash('success', 'Successfully deleted role data.');

        return response()->success(null, 'Successfully deleted role data.');
    }
}
