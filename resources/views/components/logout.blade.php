<form method="POST" action="{{ route('logout') }}" class="d-inline">
    @csrf
    <button type="submit" id="logout-btn"{{ $attributes }}>
        {{ $slot }}
    </button>
</form>
<link href="{{ admin_asset('css/logout.css') }}" rel="stylesheet">
