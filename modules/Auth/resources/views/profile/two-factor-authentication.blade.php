<x-app-layout>
    <x-card>
        <x-auth::setting active_tab="{{ $active_tab }}">
            <div>
                <h3>{{ localize('Two Factor Authentication') }}</h3>
                <p>{{ localize('Add additional security to your account using two factor authentication.') }}</p>
                <hr>
            </div>
            <div class="content">
                <div class="row">
                    <div class="col-md-12">

                        <h3 class="text-lg font-medium text-gray-900">
                            @if ($data['enabled'])
                                {{ localize('You have enabled two factor authentication.') }}
                            @else
                                {{ localize('You have not enabled two factor authentication.') }}
                            @endif
                        </h3>
                    </div>
                    <div class="col-md-12 mt-3 text-sm ">
                        <p>
                            {{ localize('When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone\'s') }}
                            <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
                                target="_blank"
                                class="text-info font-weight-bold">{{ localize('Google Authenticator Application') }}.</a>
                        </p>
                    </div>

                    @if ($data['showingQrCode'])
                        <div class="col-md-12 mt-4 text-sm ">
                            <p class="font-semibold">
                                {{ localize('Two factor authentication is now enabled. Scan the following QR code using your phone\'s') }}
                                <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
                                    target="_blank"
                                    class="text-info font-weight-bold">{{ localize('Google authenticator application') }}.</a>
                            </p>
                        </div>
                        <div class="col-md-12 mt-4">
                            {!! $user->twoFactorQrCodeSvg() !!}
                        </div>
                    @endif

                    @if ($data['showingConfirmation'])
                        <div class="col-md-12 input-group mt-4">
                            <form action="{{ route('user-two-factor.enable') }}" method="POST">
                                @csrf
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control"
                                        placeholder="Verify your authenticator application" name="code">
                                    <button class="btn btn-success " type="submit"
                                        id="button-addon2">{{ localize('Submit') }}</button>
                                </div>
                            </form>
                        </div>
                    @endif

                    @if ($data['showingRecoveryCodes'])
                        <div class="col-md-12 mt-4 text-sm">
                            <p class="font-semibold">
                                {{ localize('Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.') }}
                            </p>
                        </div>

                        <div class="col-md-12">
                            <table class="table table-hover table-borderless  border" id="two-factor-recovery-codes">
                                @foreach (json_decode(decrypt($user->two_factor_recovery_codes), true) as $code)
                                    <tr>
                                        <td>{{ $code }}</td>
                                    </tr>
                                @endforeach
                            </table>
                        </div>
                        <div class="">
                            <hr>
                            <p class="">
                                @localize('You can easily export your recovery codes to a text file by')
                                <a href="javascript:void(0);" onclick="exportColumnToTextFile()">clicking here<a>.
                            </p>
                            <p class="">
                                @localize('Note:')
                                @localize('The above codes are confidential, the codes will be used for the security of your account or login. So keep the codes secret')
                            </p>
                        </div>

                    @endif
                </div>
            </div>

            <div class="mt-5">
                @if (!$data['enabled'])
                    <button type="button" onclick="twofactore('enable')"
                        class="btn btn-success">{{ localize('Enable') }}</button>
                @else
                    @if ($data['showingRecoveryCodes'])
                        <button type="button" onclick="twofactore('regenerate_code')" class="btn btn-info mx-2">
                            {{ localize('Regenerate Recovery Codes') }}
                        </button>
                    @elseif($data['showingRecoveryCodeGenBtn'])
                        <button type="button" onclick="twofactore('show_code')" class="btn btn-info mx-2">
                            {{ localize('Show Recovery Codes') }}
                        </button>
                    @endif
                    <button type="button" onclick="twofactore('disable')"
                        class="btn btn-danger mx-2">{{ localize('Disable') }}</button>
                @endif
            </div>

            <form action="{{ route('user-two-factor.enable') }}" id="twofactoreForm" method="POST">
                @csrf
                <input type="hidden" id="twofactoreFormAction" name="action">
                <input type="hidden" id="twofactoreFormPassword" name="current_password">
            </form>
        </x-auth::setting>
    </x-card>
    @push('css')
        <link rel="stylesheet" href="{{ module_asset('Auth/css/two-factor-authentication.min.css') }}">
    @endpush
    @push('js')
        <script src="{{ module_asset('Auth/js/two-factor-authentication.min.js') }}"></script>
    @endpush
</x-app-layout>
