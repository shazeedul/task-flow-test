<?php

namespace Modules\Auth\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Fortify\Http\Controllers\PasswordResetLinkController as FortifyPasswordResetLinkController;

class PasswordResetLinkController extends FortifyPasswordResetLinkController
{
    //    your code here

    /**
     * Show the forget password view.
     */
    public function index(Request $request)
    {
        cs_set('theme', [
            'title' => 'Forgot Password',
            'description' => 'Forgot Password Page',
        ]);

        return view('auth::passwords.email');
    }
}
