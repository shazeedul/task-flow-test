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
                <div class="alert alert-warning">
                    <p>
                        <strong>Note: </strong>
                        @localize('Every change there will have a direct impact on your apps environment. This may cause your app to crash. So be careful in every change you make.')
                    </p>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group mb-3">
                            <label for="APP_NAME">{{ localize('System Name') }}</label>
                            <input type="text" class="form-control " id="APP_NAME" name="APP_NAME"
                                placeholder="{{ localize('System Name') }}"
                                value="{{ $data['APP_NAME'] ?? old('APP_NAME') }}">
                            @error('APP_NAME')
                                <span class="text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group mb-3">
                            <label for="APP_URL">{{ localize('System Site Url') }}</label>
                            <input type="url" class="form-control " id="APP_URL" name="APP_URL"
                                placeholder="{{ localize('System Site Url') }}"
                                value="{{ $data['APP_URL'] ?? old('APP_URL') }}">
                            @error('APP_URL')
                                <span class="text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group mb-3">
                            <label for="APP_URL">{{ localize('System Environment') }}</label>
                            <select class="form-control " name="APP_ENV" id="APP_ENV">
                                <option value="local" @selected($data['APP_ENV'] == 'local')>
                                    Local
                                </option>
                                <option value="production" @selected($data['APP_ENV'] == 'production')>
                                    Production
                                </option>
                            </select>
                            @error('APP_URL')
                                <span class="text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group mb-3">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="APP_DEBUG"
                                            value="1" name="APP_DEBUG" @checked($data['APP_DEBUG'] === 'true')>
                                        <label class="form-check-label"
                                            for="APP_DEBUG">{{ localize('System App Debug') }}</label>
                                    </div>
                                    @error('APP_DEBUG')
                                        <span class="text-danger" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group mb-3">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="FORCE_HTTPS"
                                            value="1" name="FORCE_HTTPS" @checked($data['FORCE_HTTPS'] === 'true')>
                                        <label class="form-check-label"
                                            for="FORCE_HTTPS">{{ localize('System Force Https') }}</label>
                                    </div>
                                    @error('FORCE_HTTPS')
                                        <span class="text-danger" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- SAVE CHANGES ACTION BUTTON -->
                    <div class="col-12 border-0 text-right mb-2 mt-1">
                        <button type="submit" class="btn btn-success">{{ localize('Save') }}</button>
                    </div>
                </div>

            </form>
        </div>
    </x-setting::setting-card>
</x-app-layout>
