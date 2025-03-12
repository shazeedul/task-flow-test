<?php

namespace Modules\Auth\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class ProfileInformationController extends Controller
{
    /**
     * Showing the profile information page
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        cs_set('theme', [
            'title' => 'Profile Information',
            'description' => 'Profile Information',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ], [
                    'name' => 'Profile Information',
                    'link' => false,
                ],
            ],
        ]);

        return view('auth::profile.index');
    }

    /**
     * Show profile settings page
     *
     * @return \Illuminate\View\View
     */
    public function general()
    {
        cs_set('theme', [
            'title' => 'General Settings',
            'description' => 'General Settings Page',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ], [
                    'name' => 'General Information',
                    'link' => false,
                ],
            ],
        ]);

        return view('auth::profile.general', [
            'active_tab' => 'general',
        ]);
    }

    /**
     * Showing Edit Profile Information page
     *
     * @return \Illuminate\View\View
     */
    public function edit()
    {
        cs_set('theme', [
            'title' => 'Edit Profile Information',
            'description' => 'Edit Profile Information',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ], [
                    'name' => 'Edit Profile Information',
                    'link' => false,
                ],
            ],
        ]);

        return view('auth::profile.edit');
    }

    /**
     * Update the user's profile information.
     */
    public function update(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,'.auth()->user()->id.',id'],
        ]);
        $user = auth()->user();
        if ($request->hasFile('avatar')) {
            $request->validate([
                'avatar' => 'image',
            ]);

            $request['profile_photo_path'] = $request->avatar->store('users');
            $user->profile_photo_path ? \delete_file($user->profile_photo_path) : null;
        }
        // update user data
        $user->update($request->all());
        // flash message
        Session::flash('success', 'Successfully Updated user account.');

        return redirect()->back();
    }
}
