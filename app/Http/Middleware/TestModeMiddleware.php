<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TestModeMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if the app is in test mode
        if (config('app.test_mode') === true) {
            //    all post,put,patch,delete requests are disabled in test mode
            if ($request->isMethod('delete')) {
                // if the request is axios then send response as json or redirect back with error message
                if ($request->ajax()) {
                    return response()->error([], 'This action is disabled in test mode.');
                } else {
                    return back()->with('error', 'This action is disabled in test mode.');
                }
            }
            // all admin/user/* or admin/role/* or admin/settings/* routes post put patch delete are disabled in test mode
            if ($request->isMethod('post') || $request->isMethod('put') || $request->isMethod('patch')) {
                if ($request->is('admin/user') || $request->is('admin/user/*') || $request->is('user') || $request->is('user/*') || $request->is('admin/role/*') || $request->is('admin/setting') || $request->is('admin/setting/*')) {
                    if ($request->ajax()) {
                        return response()->error([], 'This action is disabled in test mode.');
                    } else {
                        return back()->with('error', 'This action is disabled in test mode.');
                    }
                }
            }
        }

        return $next($request);
    }
}
