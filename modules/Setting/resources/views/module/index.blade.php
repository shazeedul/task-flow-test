<x-app-layout>
    <x-setting::setting-card>
        <!--/.Content Header (Page header)-->
        <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h6 class="fs-17 fw-semi-bold mb-0">{{ localize(config('theme.title')) }}</h6>
                </div>

            </div>
        </div>
        <div class="card-body">
            <form action="{{ route(config('theme.rprefix') . '.update') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="row">
                    @forelse ($data as $module=>$status)
                        <div class="col-md-3 py-2">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="{{ $module }}"
                                    value="1" name="modules[{{ $module }}]" @checked($status)>
                                <label class="form-check-label" for="{{ $module }}">{{ $module }}</label>
                            </div>
                        </div>
                    @empty
                        <div class="col-md-12">
                            <p class="text-muted text-center">{{ localize('No Module Found.') }}</p>
                        </div>
                    @endforelse

                    <!-- SAVE CHANGES ACTION BUTTON -->
                    <div class="col-12 border-0 text-right mb-2 mt-2 py-5">
                        <button type="submit" class="btn btn-success">{{ localize('Save') }}</button>
                    </div>
                </div>

            </form>
        </div>
    </x-setting::setting-card>
</x-app-layout>
