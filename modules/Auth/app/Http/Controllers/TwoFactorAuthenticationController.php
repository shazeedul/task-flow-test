<?php

namespace Modules\Auth\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\ValidationException;
use Laravel\Fortify\Actions\ConfirmTwoFactorAuthentication;
use Laravel\Fortify\Actions\DisableTwoFactorAuthentication;
use Laravel\Fortify\Actions\EnableTwoFactorAuthentication;
use Laravel\Fortify\Actions\GenerateNewRecoveryCodes;
use Laravel\Fortify\Features;

class TwoFactorAuthenticationController extends Controller
{
    /**
     * Show profile settings page
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        if (! Features::canManageTwoFactorAuthentication()) {
            return abort(403);
        }

        cs_set('theme', [
            'title' => 'Factor Authentication Settings',
            'description' => 'Factor Authentication  Settings Page',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ], [
                    'name' => 'Two Factor Authentication',
                    'link' => false,
                ],
            ],
        ]);
        $user = auth()->user();
        if (
            ! request()->session()->get('showingQrCode', false) &&
            Features::optionEnabled(Features::twoFactorAuthentication(), 'confirm') && is_null($user->two_factor_confirmed_at)
        ) {
            app(DisableTwoFactorAuthentication::class)($user);
        }
        $data['enabled'] = $this->getEnabledProperty($user);
        $data['showingQrCode'] = request()->session()->get('showingQrCode', false);
        $data['showingRecoveryCodes'] = request()->session()->get('showingRecoveryCodes', false);
        $data['showingConfirmation'] = request()->session()->get('showingConfirmation', false);
        $data['showingRecoveryCodeGenBtn'] = request()->session()->get('showingRecoveryCodeGenBtn', true);

        return view('auth::profile.two-factor-authentication', [
            'active_tab' => 'two-factor-authentication',
            'data' => $data,
            'user' => $user,
        ]);
    }

    public function enable(Request $request)
    {
        $user = auth()->user();
        if (! $request->code) {
            $request->validate([
                'action' => 'required',
            ]);
            if ($request->action != 'enable') {
                $request->validate([
                    'current_password' => ['required', 'string'],
                ]);
                if (! $this->password_check($user, $request->current_password)) {
                    return redirect()->route('user-two-factor.index');
                }

            }
        }
        switch ($request->action) {
            case 'enable':
                $this->enableTwoFactorAuthentication($user);
                break;
            case 'regenerate_code':
                $this->regenerateRecoveryCodes($user);
                break;
            case 'show_code':
                $this->showRecoveryCodes();
                break;
            case 'disable':
                $this->disableTwoFactorAuthentication($user);
                break;
            default:
                if ($request->code) {
                    $this->confirmTwoFactorAuthentication($request->code);
                    break;
                }
                Session::flash('error', 'Invalid Action');
                break;
        }

        return redirect()->route('user-two-factor.index');
    }

    /**
     * Enable two factor authentication for the user.
     *
     * @param  \Laravel\Fortify\Actions\EnableTwoFactorAuthentication  $enable
     * @return void
     */
    private function enableTwoFactorAuthentication($user)
    {
        $twoFaProvider = App::make('Laravel\Fortify\Contracts\TwoFactorAuthenticationProvider');

        $enable = new EnableTwoFactorAuthentication($twoFaProvider);
        $enable($user);

        if (Features::optionEnabled(Features::twoFactorAuthentication(), 'confirm')) {
            Session::flash('showingConfirmation', true);
            Session::flash('showingRecoveryCodeGenBtn', \false);
        } else {
            Session::flash('showingRecoveryCodes', true);
        }
        Session::flash('showingQrCode', true);
        Session::flash('success', 'Enabling Two Factor Authentication.');
    }

    /**
     * Confirm two factor authentication for the user.
     *
     * @param  \Laravel\Fortify\Actions\ConfirmTwoFactorAuthentication  $confirm
     * @return void
     */
    public function confirmTwoFactorAuthentication($code)
    {
        $twoFaProvider = App::make('Laravel\Fortify\Contracts\TwoFactorAuthenticationProvider');

        $confirm = new ConfirmTwoFactorAuthentication($twoFaProvider);
        $confirm(Auth::user(), $code);

        Session::flash('showingQrCode', false);
        Session::flash('showingConfirmation', false);
        Session::flash('showingRecoveryCodes', true);
    }

    /**
     * Display the user's recovery codes.
     *
     * @return void
     */
    public function showRecoveryCodes()
    {
        Session::flash('showingQrCode', false);
        Session::flash('showingRecoveryCodes', true);
    }

    /**
     * Generate new recovery codes for the user.
     *
     * @param  \Laravel\Fortify\Actions\GenerateNewRecoveryCodes  $generate
     * @return void
     */
    public function regenerateRecoveryCodes($user)
    {
        $twoFaProvider = App::make('Laravel\Fortify\Contracts\TwoFactorAuthenticationProvider');
        $generate = new GenerateNewRecoveryCodes($twoFaProvider);
        $generate($user);

        Session::flash('showingQrCode', false);
        Session::flash('showingRecoveryCodes', true);
        Session::flash('success', 'Successfully Recovery Code Regenerated');
    }

    /**
     * Disable two factor authentication for the user.
     *
     * @param  \Laravel\Fortify\Actions\DisableTwoFactorAuthentication  $disable
     * @return void
     */
    private function disableTwoFactorAuthentication($user)
    {
        $twoFaProvider = App::make('Laravel\Fortify\Contracts\TwoFactorAuthenticationProvider');

        $disable = new DisableTwoFactorAuthentication($twoFaProvider);
        $disable($user);

        Session::flash('showingQrCode', false);
        Session::flash('showingRecoveryCodes', false);
        Session::flash('success', 'Successfully Disabled Two Factor Authentication.');
    }

    /**
     * Determine if two factor authentication is enabled.
     *
     * @return bool
     */
    private function getEnabledProperty($user)
    {
        return ! empty($user->two_factor_secret);
    }

    private function password_check($user, $current_password)
    {
        if (! isset($current_password) || ! Hash::check($current_password, $user->password)) {
            throw ValidationException::withMessages(['current_password' => 'The provided password does not match your current password.']);
        }

        return true;
    }
}
