<div class="tile">
    <div class="card mb-4">
        <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h6 class="fs-17 fw-semi-bold mb-0">{{ localize(config('theme.title')) }}</h6>
                </div>
                <div class="text-end">
                    <div class="actions">
                        {{ $actions ?? '' }}
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            {{ $slot }}
        </div>
    </div>
</div>
