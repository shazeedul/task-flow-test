<x-app-layout>


    @push('css')
        <link rel="stylesheet" href="{{ admin_asset('css/dashboard.min.css') }}">
    @endpush
    @push('js')
        <script src="{{ admin_asset('vendor/amcharts5/index.min.js') }}"></script>
        <script src="{{ admin_asset('vendor/amcharts5/venn.js') }}"></script>

        <script src="{{ admin_asset('vendor/amcharts5/percent.min.js') }}"></script>
        <script src="{{ admin_asset('vendor/amcharts5/percent.min.js') }}"></script>
        <script src="{{ admin_asset('vendor/amcharts5/themes/Animated.min.js') }}"></script>
        <script src="{{ admin_asset('vendor/amcharts5/xy.min.js') }}"></script>
        <script src="{{ admin_asset('js/dashboard.min.js') }}"></script>
    @endpush
</x-app-layout>
