<?php

namespace Modules\Auth\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\ValidationException;
use Jenssegers\Agent\Agent;
use Laravel\Fortify\Rules\Password;

class BrowserSessionsController extends Controller
{
    /**
     * showing update password form
     */

    /**
     * Show profile settings page
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        cs_set('theme', [
            'title' => 'Browser Sessions Settings',
            'description' => 'Browser Sessions Settings Page',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ], [
                    'name' => 'Browser Sessions',
                    'link' => false,
                ],
            ],
        ]);
        $data['sessions'] = $this->getSessionsProperty();

        return view('auth::profile.browser-session', [
            'active_tab' => 'browser-session',
            'data' => $data,
        ]);
    }

    /**
     * Log out from other browser sessions.
     *
     * @param  \Illuminate\Contracts\Auth\StatefulGuard  $guard
     * @return void
     */
    public function destroy(Request $request)
    {
        $request->validate([
            'current_password' => ['required', 'string'],
        ]);
        $user = Auth::user();
        if (! isset($request->current_password) || ! Hash::check($request->current_password, $user->password)) {
            throw ValidationException::withMessages(['current_password' => 'The provided password does not match your current password.']);
        }

        Auth::logoutOtherDevices($request->current_password);

        $this->deleteOtherSessionRecords();

        Session::flash('success', 'Successfully all browser session removed.');

        return redirect()->back();
    }

    /**
     * Delete the other browser session records from storage.
     *
     * @return void
     */
    protected function deleteOtherSessionRecords()
    {
        if (config('session.driver') !== 'database') {
            return;
        }

        DB::connection(config('session.connection'))->table(config('session.table', 'sessions'))
            ->where('user_id', Auth::user()->getAuthIdentifier())
            ->where('id', '!=', request()->session()->getId())
            ->delete();
    }

    /**
     * Get the current sessions.
     *
     * @return \Illuminate\Support\Collection
     */
    protected function getSessionsProperty()
    {
        if (config('session.driver') !== 'database') {
            return collect();
        }

        return collect(
            DB::connection(config('session.connection'))->table(config('session.table', 'sessions'))
                ->where('user_id', Auth::user()->getAuthIdentifier())
                ->orderBy('last_activity', 'desc')
                ->get()
        )->map(function ($session) {
            return (object) [
                'agent' => $this->createAgent($session),
                'ip_address' => $session->ip_address,
                'is_current_device' => request()->session()->getId() === $session->id,
                'last_active' => Carbon::createFromTimestamp($session->last_activity)->diffForHumans(),
            ];
        });
    }

    /**
     * Create a new agent instance from the given session.
     *
     * @param  mixed  $session
     * @return \Jenssegers\Agent\Agent
     */
    protected function createAgent($session)
    {
        return tap(new Agent, function ($agent) use ($session) {
            $agent->setUserAgent($session->user_agent);
        });
    }
}
