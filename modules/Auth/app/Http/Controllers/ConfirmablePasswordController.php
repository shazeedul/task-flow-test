<?php

namespace Modules\Auth\Http\Controllers;

use Laravel\Fortify\Http\Controllers\ConfirmablePasswordController as FortifyConfirmablePasswordControllerBase;

class ConfirmablePasswordController extends FortifyConfirmablePasswordControllerBase
{
    // your code here

    /**
     * Showing the profile information page
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        cs_set('theme', [
            'title' => 'Checkpoint! Confirm Your Password',
            'description' => 'Checkpoint! Confirm Your Password',
        ]);

        return view('auth::passwords.confirm');
    }
}
