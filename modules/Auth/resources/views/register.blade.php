<x-guest-layout>
    <x-auth::card>
        <div>
            <div class="text-center mb-3">
                <h3 class="fs-24">{{ localize('Welcome to') }} {{ localize(setting('site.name')) }}</h3>
                <p class="text-muted text-center mb-0">
                    {{ localize('Nice to see you! Please Sign Up your account.') }}
                </p>
            </div>

            <form class="register-form validate text-left" method="POST" action="{{ route('register') }}">
                @csrf
                <div class="mb-3 ">
                    <label class="fw-bold mx-2" for="name">{{ localize('Name') }}</label>
                    <input type="text" class="form-control input-py @error('name') is-invalid @enderror"
                        id="name" name="name" placeholder="Enter name" required autocomplete="name">
                    <span class="invalid-feedback text-start"></span>
                    @error('name')
                        <span class="invalid-feedback text-start" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="mb-3">
                    <label class="fw-bold text-capitalize mx-2" for="email">{{ localize('Email') }}</label>
                    <input type="email" class="form-control input-py @error('email') is-invalid @enderror"
                        id="email" name="email" placeholder="Enter email" required autocomplete="email">
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
                    @error('password_confirmation')
                        <span class="error" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>

                <button type="submit" class="btn btn-success input-py w-100">{{ localize('Create Account') }}</button>
            </form>

        </div>
        <div class="bottom-text text-center my-3">
            @if (Route::has('login'))
                {{ localize('Do have an account?') }}
                <a href="{{ route('login') }}" class="fw-bold text-success">{{ localize('Sign In') }}</a>
            @endif
        </div>
    </x-auth::card>

    @push('js')
        <script src="{{ admin_asset('js/custom.min.js') }}"></script>
    @endpush
</x-guest-layout>
