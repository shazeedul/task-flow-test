<x-app-layout>
    <x-setting::setting-card>
        <x-setting::setting-base :settings="$settings" :groups="$groups" />
    </x-setting::setting-card>
    @push('lib-styles')
        <link rel="stylesheet" href="{{ nanopkg_asset('vendor/select2/select2.min.css') }}">
        <link rel="stylesheet" href="{{ nanopkg_asset('css/setting/setting.css') }}">
    @endpush
    @push('lib-scripts')
        <script src="{{ nanopkg_asset('vendor/select2/select2.min.js') }}"></script>
        <script src="{{ nanopkg_asset('vendor/clipboard/clipboard.min.js') }}"></script>
        <script src="{{ nanopkg_asset('vendor/tinymce/tinymce.min.js') }}"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/theme-clouds.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/mode-json.min.js"></script>
    @endpush
    @push('js')
        <script src="{{ nanopkg_asset('js/settings/main.min.js') }}"></script>
        <script src="{{ nanopkg_asset('js/settings/tinymce-config.min.js') }}"></script>
    @endpush
</x-app-layout>
