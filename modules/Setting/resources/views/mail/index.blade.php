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
                    <div class="col-12">
                        <div class="form-group mb-3">
                            <label for="MAIL_MAILER">{{ localize('Mail Mailer') }}</label>
                            <select name="MAIL_MAILER" id="MAIL_MAILER" class="form-control">
                                <option @selected($data['MAIL_MAILER'] == 'smtp') value="smtp" selected>SMTP</option>
                                <option @selected($data['MAIL_MAILER'] == 'sendmail') value="sendmail">Sendmail</option>
                                <option @selected($data['MAIL_MAILER'] == 'mailgun') value="mailgun">Mailgun</option>
                                <option @selected($data['MAIL_MAILER'] == 'ses') value="ses">SES</option>
                                <option @selected($data['MAIL_MAILER'] == 'postmark') value="postmark">Postmark</option>
                                <option @selected($data['MAIL_MAILER'] == 'log') value="log">Log</option>
                                <option @selected($data['MAIL_MAILER'] == 'array') value="array">Array</option>
                                <option @selected($data['MAIL_MAILER'] == 'failover') value="failover">Failover</option>
                            </select>
                            @error('MAIL_MAILER')
                                <span class="text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group mb-3">
                            <label for="MAIL_HOST">{{ localize('Mail Host') }}</label>
                            <input type="text" class="form-control " id="MAIL_HOST" name="MAIL_HOST"
                                placeholder="{{ localize('Mail Host Name') }}"
                                value="{{ $data['MAIL_HOST'] ?? old('MAIL_HOST') }}">
                            @error('MAIL_HOST')
                                <span class="text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="form-group mb-3">
                            <label for="MAIL_PORT">{{ localize('Mail Port') }}</label>
                            <input type="number" class="form-control arrow-hidden" id="MAIL_PORT" name="MAIL_PORT"
                                placeholder="{{ localize('Mail Port Number') }}"
                                value="{{ $data['MAIL_PORT'] ?? old('MAIL_PORT') }}">
                            @error('MAIL_PORT')
                                <span class="text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="form-group mb-3">
                            <label for="MAIL_USERNAME">{{ localize('Mail Username') }}</label>
                            <input type="text" class="form-control " id="MAIL_USERNAME" name="MAIL_USERNAME"
                                placeholder="{{ localize('Mail Username') }}"
                                value="{{ $data['MAIL_USERNAME'] ?? old('MAIL_USERNAME') }}">
                            @error('MAIL_USERNAME')
                                <span class="text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="form-group mb-3">
                            <label for="MAIL_PASSWORD">{{ localize('Mail Password') }}</label>
                            <input type="password" class="form-control " id="MAIL_PASSWORD" name="MAIL_PASSWORD"
                                placeholder="{{ localize('Mail Password') }}"
                                value="{{ $data['MAIL_PASSWORD'] ?? old('MAIL_PASSWORD') }}">
                            @error('MAIL_PASSWORD')
                                <span class="text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="form-group mb-3">
                            <label for="MAIL_FROM_ADDRESS">{{ localize('Sender Email Address') }}</label>
                            <div class="form-group">
                                <input type="text" class="form-control " id="MAIL_FROM_ADDRESS"
                                    name="MAIL_FROM_ADDRESS" placeholder="{{ localize('Sender Email Address') }}"
                                    value="{{ $data['MAIL_FROM_ADDRESS'] ?? old('MAIL_FROM_ADDRESS') }}">
                                @error('MAIL_FROM_ADDRESS')
                                    <span class="text-danger" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="form-group mb-3">
                            <label for="MAIL_FROM_NAME">{{ localize('Sender Name') }}</label>
                            <input type="text" class="form-control " id="MAIL_FROM_NAME" name="MAIL_FROM_NAME"
                                placeholder="{{ localize('Sender Name') }}"
                                value="{{ $data['MAIL_FROM_NAME'] ?? old('MAIL_FROM_NAME') }}">
                            @error('MAIL_FROM_NAME')
                                <span class="text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="form-group mb-3">
                            <label for="MAIL_ENCRYPTION">{{ localize('Mail Encryption') }}</label>
                            <select id="MAIL_ENCRYPTION" name="MAIL_ENCRYPTION" class="form-control">
                                <option @selected($data['MAIL_ENCRYPTION'] == 'tls') value="tls">TLS</option>
                                <option @selected($data['MAIL_ENCRYPTION'] == 'ssl') value="ssl" selected="">SSL</option>
                            </select>
                            @error('MAIL_ENCRYPTION')
                                <span class="text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
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
