<x-app-layout>
    <x-card>
        <x-slot name='actions'>
        </x-slot>

        <div>
            <x-data-table :dataTable="$dataTable" />
            <div id="page-axios-data" data-table-id="#task-table"></div>
        </div>
    </x-card>
</x-app-layout>
