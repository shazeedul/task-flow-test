<x-app-layout>
    <x-card>
        <x-slot name='actions'>
            <a href="{{ route(config('theme.rprefix') . '.create') }}" class="btn btn-success btn-sm">
                <i class="fa fa-plus-circle"></i>&nbsp;
                {{ localize('Add Task') }}
            </a>
        </x-slot>

        <div>
            <x-data-table :dataTable="$dataTable" />
            <div id="page-axios-data" data-table-id="#task-table"></div>
        </div>
    </x-card>
    
</x-app-layout>
