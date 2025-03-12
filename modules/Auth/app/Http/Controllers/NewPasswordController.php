<?php

namespace Modules\Auth\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Fortify\Http\Controllers\NewPasswordController as FortifyNewPasswordController;

class NewPasswordController extends FortifyNewPasswordController
{
    /**
     * Show the Password Rest View.
     */
    public function index(Request $request)
    {
        cs_set('theme', [
            'title' => 'Resetting Password',
            'description' => 'Resetting Password Page',
        ]);

        return view('auth::passwords.reset', [
            'token' => $request->token,
            'email' => $request->email,
        ]);
    }
}
