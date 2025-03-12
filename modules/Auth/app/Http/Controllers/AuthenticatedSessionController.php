<?php

namespace Modules\Auth\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Fortify\Contracts\LoginResponse;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController as FortifyAuthenticatedSessionController;
use Modules\Auth\Http\Requests\LoginRequest;

class AuthenticatedSessionController extends FortifyAuthenticatedSessionController
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

        return view('auth::login');
    }

    /**
     * Attempt to authenticate a new session.
     *
     * @return mixed
     */
    public function attempt(LoginRequest $request)
    {
        return $this->loginPipeline($request)->then(function ($request) {
            return app(LoginResponse::class);
        });
    }
}
