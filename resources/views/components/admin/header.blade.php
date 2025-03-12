<nav class="navbar-custom-menu navbar navbar-expand-xl m-0">
    <div class="sidebar-toggle-icon" id="sidebarCollapse">
        sidebar toggle<span></span>
    </div>
    <!--/.sidebar toggle icon-->
    <div class="navbar-icon d-flex">
        <ul class="navbar-nav flex-row gap-3 align-items-center ">


            <li class="nav-item dropdown notification">
                <a class="nav-link dropdown-toggle position-relative" href="#" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.66667 23.3333H11.6667C11.6667 23.9522 11.9125 24.5457 12.3501 24.9832C12.7877 25.4208 13.3812 25.6667 14 25.6667C14.6188 25.6667 15.2123 25.4208 15.6499 24.9832C16.0875 24.5457 16.3333 23.9522 16.3333 23.3333H23.3333C23.6428 23.3333 23.9395 23.2104 24.1583 22.9916C24.3771 22.7728 24.5 22.4761 24.5 22.1667C24.5 21.8572 24.3771 21.5605 24.1583 21.3417C23.9395 21.1229 23.6428 21 23.3333 21V12.8333C23.3333 10.358 22.35 7.98401 20.5997 6.23367C18.8493 4.48333 16.4754 3.5 14 3.5C11.5246 3.5 9.15068 4.48333 7.40034 6.23367C5.65 7.98401 4.66667 10.358 4.66667 12.8333V21C4.35725 21 4.0605 21.1229 3.84171 21.3417C3.62292 21.5605 3.5 21.8572 3.5 22.1667C3.5 22.4761 3.62292 22.7728 3.84171 22.9916C4.0605 23.2104 4.35725 23.3333 4.66667 23.3333ZM7 12.8333C7 10.9768 7.7375 9.19634 9.05025 7.88359C10.363 6.57083 12.1435 5.83333 14 5.83333C15.8565 5.83333 17.637 6.57083 18.9497 7.88359C20.2625 9.19634 21 10.9768 21 12.8333V21H7V12.8333Z"
                            fill="#00B074" />
                    </svg>
                </a>
                <div class="dropdown-menu">
                    <h6 class="notification-title">Notifications</h6>
                    <div class="notification-list">
                        <p class="text-center text-muted my-5">
                            {{ localize('No Notifications Available') }}
                        </p>
                    </div>
                </div>
                <!--/.dropdown-menu -->
            </li>
            <li class="nav-item dropdown language">
                <a class="nav-link dropdown-toggle position-relative" href="#" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                        xmlns="http://www.w3.org/2000/svg" stroke="#20c997">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M5 21V3.90002C5 3.90002 5.875 3 8.5 3C11.125 3 12.875 4.8 15.5 4.8C18.125 4.8 19 3.9 19 3.9V14.7C19 14.7 18.125 15.6 15.5 15.6C12.875 15.6 11.125 13.8 8.5 13.8C5.875 13.8 5 14.7 5 14.7"
                                stroke="#20c997" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>
                    </svg>
                </a>
                <div class="dropdown-menu language_dropdown">
                    <ul class="nav flex-column">
                        @foreach (getLocalizeLang() as $language)
                            <li class="nav-item my-1">
                                <a class="nav-link {{ app()->getLocale() == $language->code ? 'active' : '' }}"
                                    href="{{ route('lang.switch', $language->code) }}">
                                    {{ $language->title }}
                                </a>
                        @endforeach
                    </ul>
                </div>
                <!--/.dropdown-menu -->
            </li>
            <!--/.dropdown-->
            <li class="nav-item dropdown user-menu">
                <a class="nav-link dropdown-toggle nav-profile" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <p class="mb-0 fs-15 d-none d-md-block">Hello <span class="fw-semi-bold">
                            {{ auth()->user()->name ?? '' }}</span></p>
                    <img src="{{ auth()->user()->profile_photo_url }}" alt="" />
                </a>
                <div class="dropdown-menu">
                    <div class="dropdown-header d-sm-none">
                        <a href="" class="header-arrow"><i class="icon ion-md-arrow-back"></i></a>
                    </div>
                    <div class="user-header">
                        <div class="img-user">
                            <img src="{{ auth()->user()->profile_photo_url }}" />
                        </div>
                        <!-- img-user -->
                        <h6> {{ auth()->user()->name ?? '' }}</h6>
                        <span> {{ auth()->user()->email ?? '' }}</span>
                    </div>
                    <!-- user-header -->
                    <a href="{{ route('user-profile-information.index') }}" class="dropdown-item"><i
                            class="hvr-buzz-out far fa-user"></i>
                        {{ localize('My Profile') }}
                    </a>
                    <a href="{{ route('user-profile-information.edit') }}" class="dropdown-item">
                        <i class="hvr-buzz-out far fa-edit"></i>
                        {{ localize('Edit Profile') }}
                    </a>
                    <a href="{{ route('user-profile-information.general') }}" class="dropdown-item"><i
                            class="hvr-buzz-out fas fa-cog"></i>
                        {{ localize('Account Settings') }}
                    </a>
                    <span class="dropdown-sign-out-btn">
                        <x-logout class="dropdown-item">
                            <i class="hvr-buzz-out fa fa-right-from-bracket"></i>
                            {{ localize('Sign Out') }}
                        </x-logout>
                    </span>
                </div>
                <!--/.dropdown-menu -->
            </li>
        </ul>
        <!--/.navbar nav-->

    </div>
</nav>
