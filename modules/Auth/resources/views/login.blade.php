<x-guest-layout>
    <x-auth::card>
        <form class="register-form text-start" method="POST" action="{{ route('login') }}">
            <div class="mb-3">
                <h3 class="fs-24 fw-bold text-color-1 mb-1">
                    @localize('Sign In')
                    </h2>
                    <p class="fs-14 text-color-2 mb-0">
                        @localize('Enter your email and password to sign in!')
                    </p>
            </div>
            @csrf
            <div class="mb-3">
                <label for="" class="form-label fw-semi-bold">
                    @localize('Email')
                    <span class="text-danger">*</span>
                </label>

                <input type="email" class="form-control  @error('email') is-invalid @enderror" id="email"
                    name="email" placeholder="Enter email" required autocomplete="email">
                <span class="invalid-feedback text-start"></span>
                @error('email')
                    <span class="invalid-feedback text-start" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <label for="" class="form-label fw-semi-bold">
                @localize('Password')
                <span class="text-danger">*</span>
            </label>

            <div class="mb-3 position-relative password-showHide">

                <input class="form-control input-py @error('password') is-invalid @enderror" type="password"
                    name="password" id="password" placeholder="Password" required>
                <!-- Password Show and Hide-->
                <div class="password-toggle-icon">
                    <i class="fas fa-eye-slash text-black-50"></i>
                </div>
                @error('password')
                    <span class="invalid-feedback text-start" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>

            <div class="row mb-3 align-items-center">
                <div class="col-6">
                    <div class="form-check ">
                        <input class="form-check-input p-0" type="checkbox" role="switch" name="remember"
                            id="remember" {{ old('remember') ? 'checked' : '' }}>
                        <label class="form-check-label" for="remember">{{ localize('Remember me') }}</label>
                    </div>
                </div>
                @if (Route::has('password.request'))
                    <div class="col-6 text-end">
                        <a class="fs-15 text-green fw-medium"
                            href="{{ route('password.request') }}">{{ localize('Recover Password') }}</a>
                    </div>
                @endif
            </div>
            <button type="submit"
                class="btn btn-success fs-15 fw-semi-bold py-2 w-100">{{ localize('Sign In') }}</button>
        </form>


        @if (Route::has('register'))
            <div class="bottom-text text-center py-3">
                {{ localize('Don\'t have an account?') }}
                <a href="{{ route('register') }}" class="fw-bold text-success">{{ localize('Sign Up') }}</a>
            </div>
        @endif
        <div class=" p-2">
            <table class="table table-bordered fs-12">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>admin@gmail.com</td>
                        <td>admin</td>
                        <td>Administrator</td>
                    </tr>
                    <tr>
                        <td>user@gmail.com</td>
                        <td>user</td>
                        <td>User</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </x-auth::card>
    @push('css')
        <link rel="stylesheet" href="{{ module_asset('Auth/css/login.min.css') }}">
    @endpush
    @push('js')
        <script src="{{ admin_asset('js/custom.min.js') }}"></script>
        <script src="{{ module_asset('Auth/js/login.min.js') }}"></script>
    @endpush
</x-guest-layout>
