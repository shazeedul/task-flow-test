<?php

namespace Modules\Auth\Http\Controllers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Fortify\Contracts\RegisterResponse;
use Laravel\Fortify\Http\Controllers\RegisteredUserController as FortifyRegisteredUserController;

class RegisteredUserController extends FortifyRegisteredUserController
{
    /**
     * Show the registration view.
     */
    public function index(Request $request)
    {
        cs_set('theme', [
            'title' => 'Register',
            'description' => 'Register',
        ]);

        return view('auth::register');
    }

    /**
     * Create a new registered user.
     */
    public function store(Request $request,
        CreatesNewUsers $creator): RegisterResponse
    {
        event(new Registered($user = $creator->create($request->all())));

        $this->guard->login($user);

        return app(RegisterResponse::class);
    }
}
