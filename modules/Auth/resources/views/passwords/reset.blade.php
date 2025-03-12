<x-guest-layout>
    <x-auth::card>
        <form class="register-form validate text-left" method="POST" action="{{ route('password.update') }}">
            @csrf
            <div class="mb-3">
                <h3 class="fs-24 fw-bold text-color-1 mb-1">
                    {{ localize('Reset Password') }}
                </h3>
                <p class="fs-14 text-color-2 mb-0">
                    @localize('Please enter your new password.')
                </p>
            </div>
            <input type="hidden" name="token" value="{{ $token }}">

            <div class="mb-3">
                <label class="fw-bold text-capitalize" for="email">{{ localize('Email') }}</label>
                <input type="email" class="form-control input-py @error('email') is-invalid @enderror" id="email"
                    name="email" placeholder="Enter email" value="{{ $email ?? old('email') }}" readonly>
                <span class="invalid-feedback text-start"></span>
                @error('email')
                    <span class="invalid-feedback text-start" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="mb-3">
                <label class="fw-bold text-capitalize mx-2" for="password">{{ localize('Password') }}</label>
                <div class="form-input mb-3 position-relative password-showHide">
                    <input class="form-control input-py @error('password') is-invalid @enderror" type="password"
                        name="password" id="password" placeholder="Password" required>
                    <!-- Password Show and Hide-->
                    <div class="password-toggle-icon">
                        <i class="fas fa-eye-slash text-black-50"></i>
                    </div>
                </div>
                @error('password')
                    <span class="invalid-feedback text-start" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="mb-3">
                <label class="fw-bold text-capitalize" for="password2">
                    {{ localize('Password Confirmation') }}
                </label>
                <div class="form-input mb-3 position-relative password-showHide">
                    <input class="form-control input-py @error('password_confirmation') is-invalid @enderror"
                        type="password" name="password_confirmation" id="password2" placeholder="Password" required>

                    <!-- Password Show and Hide-->
                    <div class="password-toggle-icon">
                        <i class="fas fa-eye-slash text-black-50"></i>
                    </div>
                </div>
            </div>

            <button type="submit" class="btn btn-success w-100">
                {{ localize('Reset Password') }}
            </button>
        </form>

        </div>
    </x-auth::card>
    @push('js')
        <script src="{{ admin_asset('js/custom.min.js') }}"></script>
    @endpush
</x-guest-layout>
