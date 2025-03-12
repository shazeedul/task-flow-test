<x-app-layout>

    <x-setting::setting-card>
        <!--/.Content Header (Page header)-->
        <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h6 class="fs-17 fw-semi-bold mb-0">{{ _localize('Language') }} {{ _localize('List') }}</h6>
                </div>
                <div class="text-end">
                    <div class="actions">
                        <a href="javascript:void(0);" class="btn btn-success btn-sm"
                            onclick="axiosModal('{{ route(config('theme.rprefix') . '.create') }}')">
                            <i class="fa fa-plus-circle"></i>&nbsp;
                            {{ _localize('Add New Language') }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <x-data-table :dataTable="$dataTable" />
            <div id="page-axios-data" data-table-id="#language-table"></div>
        </div>
    </x-setting::setting-card>

</x-app-layout>
