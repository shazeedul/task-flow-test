{{ $dataTable->table() }}

@push('lib-styles')
    <link rel="stylesheet" href="{{ nanopkg_asset('vendor/yajra-laravel-datatables/datatables.min.css') }}">
    <link rel="stylesheet" href="{{ nanopkg_asset('vendor/yajra-laravel-datatables/responsive.dataTables.min.css') }}">
    <link rel="stylesheet" href="{{ nanopkg_asset('vendor/yajra-laravel-datatables/datatables.custom.min.css') }}">
@endpush
@push('css')
    <link rel="stylesheet" href="{{ admin_asset('css/data-table.min.css') }}">
@endpush
@push('lib-scripts')
    <script src="{{ nanopkg_asset('vendor/yajra-laravel-datatables/datatables.min.js') }}"></script>
    <script src="{{ nanopkg_asset('vendor/yajra-laravel-datatables/dataTables.responsive.min.js') }}"></script>
@endpush

@push('js')
    {{ $dataTable->scripts() }}
@endpush
