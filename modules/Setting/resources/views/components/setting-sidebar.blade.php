<nav class="sidebar-nav card py-2 sub-side-bar p-2 py-3 setting-sidebar-nav">
    <ul class=" nav">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                aria-expanded="false">
                <i class="typcn typcn-adjust-brightness"></i>
                {{ localize('General Settings') }}
            </a>
            <ul class="dropdown-menu">
                @foreach (Modules\Setting\Facades\Setting::onlyGroup() as $group)
                    @if ($group == 'Chat')
                        @continue
                    @endif
                    <li class="{{ request()?->g == $group ? 'mm-active' : null }}">
                        <a href="{{ route('admin.setting.index', ['g' => $group]) }}"
                            class="dropdown-item settings-goroup">{{ localize($group) }}</a>
                    </li>
                @endforeach
            </ul>
        </li>
        @if (can('mail_setting_management') && Route::has('admin.setting.mail.index'))
            <li class="nav-item {{ active_menu(route('admin.setting.mail.index'), 'mm-active') }} ">
                <a href="{{ route('admin.setting.mail.index') }}">
                    <i class="typcn typcn-mail"></i>
                    {{ localize('Mail Setting') }}
                </a>
            </li>
        @endif
        @if (can('sms_setting_management') && Route::has('admin.setting.sms.index'))
            <li class="nav-item {{ active_menu(route('admin.setting.sms.index'), 'mm-active') }} ">
                <a href="{{ route('admin.setting.sms.index') }}">
                    <i class="typcn typcn-message"></i>
                    {{ localize('SMS Setting') }}
                </a>
            </li>
        @endif
        @if (can('socket_setting_management') && Route::has('admin.setting.socket.index'))
            <li class="nav-item {{ active_menu(route('admin.setting.socket.index'), 'mm-active') }} ">
                <a href="{{ route('admin.setting.socket.index') }}">
                    <i class="typcn typcn-wi-fi-outline"></i>
                    {{ localize('Socket Setting') }}
                </a>
            </li>
        @endif
        @if (can('env_setting_management') && Route::has('admin.setting.env.index'))
            <li class="nav-item {{ active_menu(route('admin.setting.env.index'), 'mm-active') }} ">
                <a href="{{ route('admin.setting.env.index') }}">
                    <i class="typcn typcn-document-text"></i>
                    {{ localize('.ENV Setting') }}
                </a>
            </li>
        @endif
        @if (can('language_setting_management') && Route::has('admin.language.index'))
            <li class="nav-item {{ active_menu(route('admin.language.index'), 'mm-active') }} ">
                <a href="{{ route('admin.language.index') }}">
                    <i class="typcn typcn-sort-alphabetically"></i>
                    {{ localize('Language') }}
                </a>
            </li>
        @endif
        @if (can('print_setup') && Route::has('admin.setting.print-setup'))
            <li class="nav-item {{ active_menu(route('admin.language.index'), 'mm-active') }} ">
                <a href="{{ route('admin.language.index') }}">
                    <i class="typcn typcn-sort-alphabetically"></i>
                    {{ localize('Language') }}
                </a>
            </li>
        @endif
        @if (Route::has('artisan-http.storage-link'))
            <li class="nav-item {{ active_menu(route('artisan-http.storage-link'), 'mm-active') }} ">
                <a href="javascript:void(0);" onclick="storageLink('{{ route('artisan-http.storage-link') }}')">
                    <i class="typcn typcn-arrow-loop-outline"></i>
                    {{ localize('Fix Storage Link') }}
                </a>
            </li>
        @endif
    </ul>
</nav>
