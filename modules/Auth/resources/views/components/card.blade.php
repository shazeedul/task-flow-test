<div class="d-flex align-items-center justify-content-center text-center login-bg h-100vh"
    style="background-image: url({{ setting('site.auth_banner', admin_asset('img/login-bg.png'), true) }});">
    <div class="position-relative m-auto">
        <div class="form-container">
            <div class="panel login-form-w">
                <div class="panel-header text-center">
                    <img class="brand_logo" src="{{ setting('site.logo_black', admin_asset('img/logo.png'), true) }}"
                        alt="">
                </div>
                {{ $slot }}
            </div>
        </div>
    </div>
</div>
