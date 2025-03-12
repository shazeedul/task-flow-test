<?php

namespace App\Traits\User;

use Illuminate\Support\Facades\Session;

trait GeneralInfo
{
    private function general_info_update($user, $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
        ]);
        dd($user->profile_photo_path);

        if ($request->hasFile('avatar')) {
            $request->validate([
                'avatar' => 'image',
            ]);

            $request['profile_photo_path'] = $request->avatar->store('users');
            $user->profile_photo_path ? \delete_file($user->profile_photo_path) : null;
        }
        // update user data
        $user->update($request->all());
        // forget cache
        $user->forgetCache();
        // flash message
        Session::flash('success', 'Successfully Updated user account.');

        return \true;
    }
}
