<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthenticatePresenceChatChannel
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // only for presence channel
        if ($request->has('channel_name') && $request->channel_name == 'presence-chat') {
            $user = User::make();
            $user->id = (int) str_replace('.', '', microtime(true));
            // Log in the user
            Auth::login($user);
        }

        return $next($request);
    }
}
