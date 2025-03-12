<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    {{-- meta manager --}}
    <x-meta-manager />
    {{-- favicon --}}
    <x-favicon />
    {{-- style --}}
    <x-admin.styles />
    <x-language::localizer />
</head>

<body {{ $attributes->merge(['class' => 'fixed sidebar-mini']) }}>
    <!-- Preloader -->
    <x-admin.preloader />
    <!-- react page -->
    <div id="app">
        <!-- Begin page -->
        <div class="wrapper">
            <!-- start header -->
            <x-admin.left-sidebar />
            <!-- end header -->
            <div class="content-wrapper">
                <div class="main-content">
                    <x-admin.header />

                    <div class="body-content">
                        {{ $slot }}
                    </div>
                </div>
                <div class="overlay"></div>
                <x-admin.footer />
            </div>
        </div>
        <!--end  vue page -->
    </div>
    <!-- END layout-wrapper -->

    @stack('modal')
    <x-modal id="delete-modal" :title="localize('Delete Modal')">
        <form action="javascript:void(0);" class="needs-validation" id="delete-modal-form">
            <div class="modal-body">
                <p>{{ localize("Are you sure you want to delete this item? You won't be able to revert this item back!") }}
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">{{ localize('Close') }}</button>
                <button class="btn btn-danger" type="submit" id="delete_submit">{{ localize('Delete') }}</button>
            </div>
        </form>
    </x-modal>

    <!-- start scripts -->
    <x-admin.scripts />
    <!-- end scripts -->
    <x-toster-session />
</body>

</html>
