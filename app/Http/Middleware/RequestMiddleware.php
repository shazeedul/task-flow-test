<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RequestMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $method)
    {
        if ($method == 'ajax' && ! $request->ajax()) {
            return abort(403, 'Only Ajax Request Allow');
        } elseif ($method == 'http' && $request->ajax()) {
            return abort(403, 'Only Non-Ajax Request Allow');
        }

        return $next($request);
    }
}
