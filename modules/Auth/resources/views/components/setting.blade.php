@props(['active_tab'])
<div class="row">
    <div class="col-md-3 setting-nav">
        <ul class="nav flex-column" id="pills-tab" role="tablist">
            @if (Laravel\Fortify\Features::canUpdateProfileInformation())
                <li class="nav-item">
                    <a class="nav-link {{ $active_tab == 'general' ? 'active' : '' }} "
                        href="{{ route('user-profile-information.general') }}">
                        {{ localize('General Info') }}
                    </a>
                </li>
            @endif
            @if (Laravel\Fortify\Features::enabled(Laravel\Fortify\Features::updatePasswords()))
                <li class="nav-item">
                    <a class="nav-link {{ $active_tab == 'password' ? 'active' : '' }} "
                        href="{{ route('user-password.index') }}">
                        {{ localize('Password Update') }}
                    </a>
                </li>
            @endif
            @if (Laravel\Fortify\Features::canManageTwoFactorAuthentication())
                <li class="nav-item">
                    <a class="nav-link {{ $active_tab == 'two-factor-authentication' ? 'active' : '' }} "
                        href="{{ route('user-two-factor.index') }}">
                        {{ localize('Two Factor Authentication') }}
                    </a>
                </li>
            @endif
            <li class="nav-item">
                <a class="nav-link {{ $active_tab == 'browser-session' ? 'active' : '' }} "
                    href="{{ route('user-browser-sessions.index') }}">
                    {{ localize('Browser Sessions') }}
                </a>
            </li>
        </ul>
    </div>
    <div class="col-md-9 ">
        <div class=" setting-content">
            {{ $slot }}

        </div>
    </div>
</div>
@push('css')
    <link rel="stylesheet" href="{{ module_asset('Auth/css/setting.min.css') }}">
@endpush
