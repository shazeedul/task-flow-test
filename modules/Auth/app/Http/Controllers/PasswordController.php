<?php

namespace Modules\Auth\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\ValidationException;
use Laravel\Fortify\Rules\Password;

class PasswordController extends Controller
{
    /**
     * showing update password form
     */

    /**
     * Show profile settings page
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        cs_set('theme', [
            'title' => 'Password Update Settings',
            'description' => 'Password Update Settings Page',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ], [
                    'name' => 'Update Password',
                    'link' => false,
                ],
            ],
        ]);

        return view('auth::profile.password', [
            'active_tab' => 'password',
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'current_password' => ['required', 'string'],
            'password' => ['required', 'string', new Password, 'confirmed'],
        ]);
        $user = auth()->user();
        if (! isset($request->current_password) || ! Hash::check($request->current_password, $user->password)) {
            throw ValidationException::withMessages(['current_password' => 'The provided password does not match your current password.']);
        }
        $user->forceFill([
            'password' => Hash::make($request->password),
        ])->save();
        Session::flash('success', 'Successfully Updated user Password.');

        return redirect()->back();
    }
}
