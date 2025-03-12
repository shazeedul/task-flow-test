<?php

namespace Modules\Auth\Http\Controllers;

use Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController as FortifyTwoFactorAuthenticatedSessionController;

class TwoFactorAuthenticatedSessionController extends FortifyTwoFactorAuthenticatedSessionController
{
    /**
     * Show the login view.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function index()
    {
        cs_set('theme', [
            'title' => 'Two Factor Challenge',
            'description' => 'Two Factor Challenge for Login',
        ]);

        return view('auth::two-factor-challenge');
    }
}
