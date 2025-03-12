<x-guest-layout>
    <x-auth::card>
        <div class="">
            <div class="text-center mb-3">
                <h3 class="fs-24">{{ localize('Two Factor Challenge!') }}</h3>
                <p class="text-muted text-center mb-0">
                    {{ localize('Check Your Google Authenticator Application And Entering The Authentication Code.') }}
                </p>
            </div>

            @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif
            <form class="register-form validate" method="POST" action="{{ route('two-factor.login') }}">
                @csrf
                <ul class="nav nav-tabs two-factor-nav border-0" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="authenticator-code-tab" data-bs-toggle="tab"
                            data-bs-target="#authenticator-code" type="button" role="tab"
                            aria-controls="authenticator-code"
                            aria-selected="true">{{ localize('Google Authenticator') }}
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="recovery-code-tab" data-bs-toggle="tab"
                            data-bs-target="#recovery-code" type="button" role="tab" aria-controls="recovery-code"
                            aria-selected="false">
                            {{ localize('Using Recovery Code') }}
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active py-5 px-2" id="authenticator-code" role="tabpanel"
                        aria-labelledby="authenticator-code-tab">
                        <p class=" text-start">
                            {{ localize('Please confirm access to your account by entering the authentication code provided by your authenticator application.') }}
                        </p>
                        <div class="mb-3">
                            <input type="number" class="form-control input-py @error('code') is-invalid @enderror"
                                id="code" inputmode="numeric" name="code"
                                placeholder="Enter Google Authenticator code" autocomplete="code">
                            @error('code')
                                <span class="invalid-feedback text-start" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>
                    <div class="tab-pane fade py-5 px-2" id="recovery-code" role="tabpanel"
                        aria-labelledby="recovery-code-tab">
                        <p class=" text-start">
                            {{ localize('Please confirm access to your account by entering one of your emergency recovery codes.') }}
                        </p>
                        <div class="mb-3">
                            <input type="text"
                                class="form-control input-py @error('recovery_code') is-invalid @enderror"
                                id="recovery_code" name="recovery_code" placeholder="Enter Recovery code"
                                autocomplete="recovery_code">
                            @error('recovery_code')
                                <span class="invalid-feedback text-start" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-success input-py w-100">
                    {{ localize('Verify Now') }}
                </button>
            </form>
        </div>
    </x-auth::card>
    @push('css')
        <link rel="stylesheet" href="{{ module_asset('Auth/css/two-factor-challenge.min.css') }}">
    @endpush
</x-guest-layout>
