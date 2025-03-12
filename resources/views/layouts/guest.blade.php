<!doctype html>
<html lang="en">

<head>
    {{-- meta manager --}}
    <x-meta-manager />
    {{-- favicon --}}
    <x-favicon />
    {{-- style --}}
    <x-admin.styles />
</head>

<body {{ $attributes->merge(['class' => '']) }}>
    <!-- Preloader -->
    <x-admin.preloader />
    <div class="">
        {{ $slot }}
    </div>
    <!-- /.End of form wrapper -->
    @stack('modal')
    <!-- start scripts -->
    <x-admin.scripts />
    <!-- end scripts -->
    <x-toster-session />
</body>

</html>
