<x-guest-layout>
    <div class="form-wrapper m-auto">
        <div class="form-container my-4" id="verify-form-container">
            <div class="register-logo text-center mb-4">
                <img class="" src="{{ admin_asset('img/bdtask-logo.webp') }}" alt="">
            </div>
            <div class="panel">
                <div class="panel-header text-center mb-3">
                    <h3 class="fs-24">{{ localize('Verify Your Email Address') }}</h3>
                    <p class="text-muted text-center mb-0"></p>
                </div>
                @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ localize('A fresh verification link has been sent to your email address.') }}
                    </div>
                @endif
                <p class="text-muted text-center mb-0">
                    {{ localize('Before proceeding, please check your email for a verification link.') }}
                    {{ localize('If you did not receive the email') }}
                </p>
                <form class="d-inline" method="POST" action="{{ route('verification.send') }}">
                    @csrf
                    <button type="submit" class="btn btn-link p-0 m-0 align-baseline">
                        {{ localize('click here to request another') }}
                    </button>.
                </form>
            </div>
        </div>
    </div>
    @push('css')
        <link href="{{ admin_asset('css/verify.css') }}" rel="stylesheet">
    @endpush

</x-guest-layout>
