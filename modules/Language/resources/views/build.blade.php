<x-app-layout>

    <x-setting::setting-card>
        <!--/.Content Header (Page header)-->
        <div class="body-content">
            <div class="card mb-4">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 class="fs-17 fw-semi-bold mb-0">@localize('Language') : {{ $language->title }}</h6>
                        </div>
                        <div class="text-end">
                            <div class="actions">
                                <a href="{{ route('admin.language.index') }}" class="btn btn-success btn-sm">
                                    <i class="fa fa-list mx-1"></i>
                                    @localize('Language')
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-body ">
                    <div class="mb-2">
                        <table class="table display table-bordered table-sm  table-hover " id="local-builder-table"
                            data-ajax="{{ route(config('theme.rprefix') . '.data-table-ajax', $language->code) }}"
                            data-update>
                            <thead>
                                <tr class="role-header">
                                    <th>@localize('Key')</th>
                                    <th>@localize('Label')</th>
                                    <th>@localize('Action')</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>

                        </table>
                    </div>
                    <div class="table-responsive">
                        <form id="build-local-form"
                            action="{{ route(config('theme.rprefix') . '.store', $language->code) }}" method="post"
                            onsubmit="buildLocalForm()">
                            @csrf
                            <fieldset>
                                <legend class="w-auto">
                                    @localize('Add New Local')
                                </legend>
                                <table class="table display table-bordered table-sm  table-hover " id="build-local">
                                    <thead>
                                        <tr class="role-header">
                                            <th>@localize('Key')</th>
                                            <th>@localize('Label')</th>
                                            <th>@localize('Action')</th>
                                        </tr>
                                    </thead>
                                </table>
                            </fieldset>
                            <div>
                                <button type="submit" class="btn btn-success btn-lg">@localize('Save')</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        @push('lib-styles')
            <link rel="stylesheet" href="{{ nanopkg_asset('vendor/yajra-laravel-datatables/datatables.min.css') }}">
            <link rel="stylesheet"
                href="{{ nanopkg_asset('vendor/yajra-laravel-datatables/responsive.dataTables.min.css') }}">
            <link rel="stylesheet" href="{{ nanopkg_asset('vendor/yajra-laravel-datatables/datatables.custom.min.css') }}">
            <link rel="stylesheet" href="{{ module_asset('Language/css/app.min.css') }}">
        @endpush
        @push('lib-scripts')
            <script src="{{ nanopkg_asset('vendor/yajra-laravel-datatables/datatables.min.js') }}"></script>
            <script src="{{ nanopkg_asset('vendor/yajra-laravel-datatables/dataTables.responsive.min.js') }}"></script>
        @endpush

        @push('js')
            <script src="{{ module_asset('Language/js/app.min.js') }}"></script>
        @endpush
    </x-setting::setting-card>
</x-app-layout>
