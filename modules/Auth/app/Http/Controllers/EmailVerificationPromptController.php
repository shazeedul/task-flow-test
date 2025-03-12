<?php

namespace Modules\Auth\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Fortify\Fortify;
use Laravel\Fortify\Http\Controllers\EmailVerificationPromptController as FortifyEmailVerificationPromptController;

class EmailVerificationPromptController extends FortifyEmailVerificationPromptController
{
    /**
     * Show the login view.
     */
    public function index(Request $request)
    {
        cs_set('theme', [
            'title' => 'Login',
            'description' => 'Login',
        ]);

        return $request->user()->hasVerifiedEmail()
        ? redirect()->intended(Fortify::redirects('email-verification'))
        : view('auth::verify');
    }
}
