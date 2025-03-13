<nav class="sidebar sidebar-bunker sidebar-sticky overflow-hidden">
    <div class="sidebar-header">
        <a href="{{ route('home') }}" class="sidebar-brand">
            <img class="sidebar-logo-lg" src="{{ setting('site.logo_black', admin_asset('img/logo.png'), true) }}">
            <img class="sidebar-logo-sm" src="{{ setting('site.favicon', admin_asset('img/favicon.png'), true) }}">
        </a>
    </div>
    <!--/.sidebar header-->
    <div class="sidebar-body">
        <nav class="sidebar-nav">
            <ul class="metismenu text-capitalize">
                <x-admin.nav-link href="{{ route('admin.dashboard') }}">
                    <i class="hvr-buzz-out fas fa-home"></i>
                    <span> {{ localize('Dashboard') }}</spa>
                </x-admin.nav-link>

                <!-- User Interface -->
                @if (module_active('user') && can('user_management'))
                    <x-admin.multi-nav>
                        <x-slot name="title">
                            <i class="hvr-buzz-out fas fa-users"></i>
                            <span> {{ localize('User Interface') }}</span>
                        </x-slot>
                        <x-admin.nav-link href="{{ route('admin.user.index') }}">
                            {{ localize('User') }}
                        </x-admin.nav-link>
                        <x-admin.nav-link href="{{ route('admin.user.create') }}">
                            {{ localize('Create User') }}
                        </x-admin.nav-link>
                    </x-admin.multi-nav>
                @endif
                <!-- Role-Permission Management -->
                @if (can('permission_management') || can('role_management'))
                    <x-admin.multi-nav>
                        <x-slot name="title">
                            <i class="hvr-buzz-out fas fa-user-lock"></i>
                            <span> {{ localize('Role - Permission') }}</spa>
                        </x-slot>
                        @if (module_active('permission') && can('permission_management'))
                            <x-admin.nav-link href="{{ route('admin.permission.index') }}">
                                {{ localize('Permission') }}
                            </x-admin.nav-link>
                        @endif

                        @if (module_active('role') && can('role_management'))
                            <x-admin.nav-link href="{{ route('admin.role.index') }}">
                                {{ localize('Role') }}
                            </x-admin.nav-link>
                        @endif
                    </x-admin.multi-nav>
                @endif
                <!-- TaskFlow Management -->
                @if (module_active('taskflow'))
                    @can('project_management')
                        <x-admin.multi-nav>
                            <x-slot name="title">
                                <i class="hvr-buzz-out fas fa-tasks"></i>
                                <span> {{ localize('TaskFlow') }}</span>
                            </x-slot>
                            <x-admin.nav-link href="{{ route('admin.project.index') }}">
                                {{ localize('Project') }}
                            </x-admin.nav-link>
                            <x-admin.nav-link href="{{ route('admin.task.index') }}">
                                {{ localize('Task') }}
                            </x-admin.nav-link>
                        </x-admin.multi-nav>
                    @endcan
                    @can('member_task')
                        <x-admin.nav-link href="{{ route('admin.member.task.index') }}">
                            <i class="hvr-buzz-out fas fa-tasks"></i>
                            <span> {{ localize('Task') }}</spa>
                        </x-admin.nav-link>
                    @endcan
                @endif
                <!-- Setting Management -->
                @if (module_active('setting') && can('setting_management'))
                    <x-admin.nav-link href="{{ route('admin.setting.index', ['g' => 'Site']) }}"
                        class="{{ request()->is('admin/setting*') ? 'mm-active' : '' }}">
                        <i class="hvr-buzz-out fas fa-cog"></i>
                        <span>{{ localize('Settings') }}</span>
                    </x-admin.nav-link>
                @endif
                <x-admin.nav-link href="javascript:void(0);" class="sidebar-logout-btn">
                    <x-logout>
                        <i class="hvr-buzz-out fas fa-sign-out-alt"></i>
                        <span>{{ localize('Logout') }}</span>
                    </x-logout>
                </x-admin.nav-link>
            </ul>
        </nav>
    </div>
    <!-- sidebar-body -->
</nav>
