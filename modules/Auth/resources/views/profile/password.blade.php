<x-app-layout>
    <x-card>
        <x-auth::setting active_tab="{{ $active_tab }}">
            <h3>{{ localize(config('theme.title')) }}</h3>
            <hr>
            <form action="{{ route('user-password.update') }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="row">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="col-form-label text-capitalize mx-2" for="current_password">
                                {{ localize('Current Password') }}
                                <span class="text-danger">*</span>
                            </label>
                            <div class="form-input mb-3 position-relative password-showHide">
                                <input class="form-control input-py @error('password') is-invalid @enderror"
                                    type="password" name="current_password" id="current_password"
                                    placeholder="Current Password" required>

                                <!-- Password Show and Hide-->
                                <div class="password-toggle-icon">
                                    <i class="fas fa-eye-slash text-black-50"></i>
                                </div>
                            </div>
                            @error('current_password')
                                <span class="invalid-feedback text-start" role="alert">
                                    <strong>{{ localize($message) }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label class="col-form-label text-capitalize mx-2"
                                for="new_password">{{ localize('New Password') }}</label>
                            <div class="form-input mb-3 position-relative password-showHide">
                                <input class="form-control input-py @error('password') is-invalid @enderror"
                                    type="password" name="password" id="new_password" placeholder="New Password"
                                    required>

                                <!-- Password Show and Hide-->
                                <div class="password-toggle-icon">
                                    <i class="fas fa-eye-slash text-black-50"></i>
                                </div>
                            </div>
                            @error('password')
                                <span class="invalid-feedback text-start" role="alert">
                                    <strong>{{ localize($message) }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label class="col-form-label text-capitalize" for="new_confrim_password">
                                {{ localize('Re-type New Password') }}
                            </label>
                            <div class="form-input mb-3 position-relative password-showHide">
                                <input class="form-control input-py @error('new_confrim_password') is-invalid @enderror"
                                    type="password" name="password_confirmation" id="new_confrim_password"
                                    placeholder="Password" required>
                                <!-- Password Show and Hide-->
                                <div class="password-toggle-icon">
                                    <i class="fas fa-eye-slash text-black-50"></i>
                                </div>
                            </div>
                            @error('password_confirmation')
                                <span class="error" role="alert">
                                    <strong>{{ localize($message) }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>
                    <div class="col-md-12 pt-5">
                        <button class="btn btn-success input-py">{{ localize('Update') }}</button>
                    </div>
                </div>
            </form>
        </x-auth::setting>
    </x-card>
    @push('js')
        <script src="{{ admin_asset('js/custom.min.js') }}"></script>
    @endpush
</x-app-layout>
