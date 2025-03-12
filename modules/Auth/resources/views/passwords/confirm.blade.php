<x-guest-layout>
    <x-auth::card>
        <form class="register-form validate" method="POST" action="{{ route('password.confirm') }}">
            @csrf
            <div class="mb-4">
                <h3 class="fs-24 fw-bold text-color-1 mb-1">{{ localize('Confirm Password') }}</h3>
                <p class="fs-14 text-color-2 mb-0">
                    {{ localize('Please confirm your password before continuing.') }}
                </p>
            </div>
            <div class="form-input mb-3 position-relative  password-showHide">
                <input class="form-control input-py @error('password') is-invalid @enderror" type="password"
                    name="password" placeholder="Password" required>

                <!-- Password Show and Hide-->
                <div class="password-toggle-icon">
                    <i class="fas fa-eye-slash text-black-50"></i>
                </div>
                @error('password')
                    <span class="invalid-feedback text-start" role="alert">
                        <strong>{{ localize($message) }}</strong>
                    </span>
                @enderror
            </div>

            <button type="submit" class="btn btn-success w-100">
                {{ localize('Confirm Password') }}
            </button>
        </form>

        <div class="pb-2">
            @if (Route::has('password.request'))
                {{ localize('Don\'t have Remind your Password?') }}
                <br>
                <a href="{{ route('password.request') }}" class="fw-bold text-danger">
                    {{ localize('Forgot Your Password?') }}
                </a>
            @endif
        </div>
    </x-auth::card>
    @push('js')
        <script src="{{ admin_asset('js/custom.min.js') }}"></script>
    @endpush
</x-guest-layout>
