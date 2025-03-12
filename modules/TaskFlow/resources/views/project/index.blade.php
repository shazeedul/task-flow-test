<x-app-layout>
    <x-card>
        <x-slot name='actions'>
            <a href="javascript:void(0)" class="btn btn-success btn-sm"
                onclick="axiosModal('{{ route(config('theme.rprefix') . '.create') }}', 'GET', null, null, 'modal-xl')">
                <i class="fa fa-plus-circle"></i>&nbsp;
                {{ localize('Add Project') }}
            </a>
        </x-slot>

        <div>
            <x-data-table :dataTable="$dataTable" />
            <div id="page-axios-data" data-table-id="#project-table"></div>
        </div>
    </x-card>

</x-app-layout>
