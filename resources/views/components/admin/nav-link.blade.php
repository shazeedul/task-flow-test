@props(['fullUrlCheck' => false])
<li class="{{ active_menu($attributes['href'], 'mm-active', $fullUrlCheck) }} {{ $attributes['class'] ?? '' }}">
    <a class="text-capitalize" href="{{ $attributes['href'] ?? 'javascript: void(0);' }}"
        target="{{ $attributes['target'] ?? '_self' }}">
        {{ $slot }}
    </a>
</li>
