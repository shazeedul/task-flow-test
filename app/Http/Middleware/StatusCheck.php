<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class StatusCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->user()->status === 'Pending') {
            auth()->logout();

            return redirect()->route('login')->with('error', 'Your account is not active. Please contact the administrator.');
        }
        if ($request->user()->status === 'Suspended') {
            auth()->logout();

            return redirect()->route('login')->with('error', 'Your account is suspended. Please contact the administrator.');
        }

        return $next($request);

    }
}
