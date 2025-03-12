<li class="breadcrumb-item {{ $attributes['class'] }}">
    @if(isset($attributes['class']) && $attributes['class'])
    {{ $slot }}
    @else
    <a href="{{ $attributes['href']?$attributes['href']:'javascript: void(0);' }}">
        {{ $slot }}
    </a>
    @endif
</li>

