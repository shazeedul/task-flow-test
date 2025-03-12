<!-- start page title -->
<div class="page-title-box pb-3">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="{{ isset($rightContent)?'col-sm-6':'col-sm-12' }}">
                <div class="page-title text-capitalize">
                    @isset($title)
                    <h4 class="breadcrumb-title">{{ $title }}</h4>
                    @endisset
                    <ol class="breadcrumb m-0">
                        {{ $slot }}
                    </ol>
                </div>
            </div>
            @isset($rightContent)
            <div class="col-sm-6">
                <div class="float-end d-none d-sm-block text-capitalize">
                    {{ $rightContent }}
                </div>
            </div>
            @endisset
        </div>
    </div>
</div>
<!-- end page title -->
