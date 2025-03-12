<!--/.Content Header (Page header)-->
<div class="body-content">
    <div class="row">
        <div class="col-md-12 my-2">
            <x-setting::setting-sidebar />
        </div>
        <div class="col-md-12">
            @if ($errors->any())
                <div class="alert alert-danger">
                    <strong>{{ localize('Whoops!') }}</strong>
                    {{ localize('There were some problems with your input.') }}<br><br>
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            <div class="card mb-4 p-5">
                {{ $slot }}
            </div>
        </div>
    </div>
</div>
@push('css')
    <link rel="stylesheet" href="{{ module_asset('Setting/css/app.css') }}">
@endpush

@push('js')
    <script src="{{ module_asset('Setting/js/storage-link.min.js') }}"></script>
@endpush
