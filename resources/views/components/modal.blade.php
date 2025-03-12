@props(['close'=>true,'title'=>''])
<!-- Modal -->
<div {{ $attributes->merge(['class'=>'modal fade']) }}
    data-bs-keyboard="false" tabindex="-1" data-bs-backdrop="{{ $close?'true':'static' }}"
    aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{ $title ??'' }}</h5>
                @if ($close)
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                @endif
            </div>
            <div class="modal-body">
                {{ $slot }}
            </div>
        </div>
    </div>
</div>