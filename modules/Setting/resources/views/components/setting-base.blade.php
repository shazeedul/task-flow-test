<form action="{{ route(config('theme.rprefix') . '.update') }}" method="POST" enctype="multipart/form-data">
    @csrf
    @method('PUT')
    <input type="hidden" name="setting_tab" class="setting_tab" value="{{ request()?->g }}" />

    <div>
        @forelse($settings as $setting)
            <fieldset>
                <legend>{{ $setting->display_name }}</legend>
                <div class="d-flex justify-content-between">
                    <div class="panel-heading my-2">
                        <code
                            class="badge badge-pill badge-info text-light setting_key">setting('{{ $setting->key }}')</code>
                        <a href="javascript:void(0);" class="panel-action-btn clipboard"
                            data-clipboard-text="setting('{{ $setting->key }}')">
                            <svg width="18px" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000"
                                enable-background="new 0 0 1000 1000" xml:space="preserve">
                                <g>
                                    <g>
                                        <path
                                            d="M761.3,924.7H108v-588h653.3v196h65.3V206c0-35.7-29.6-65.3-65.3-65.3h-196C565.3,68.2,507.1,10,434.7,10C362.2,10,304,68.2,304,140.7H108c-35.7,0-65.3,29.6-65.3,65.3v718.7c0,35.7,29.6,65.3,65.3,65.3h653.3c35.7,0,65.3-29.6,65.3-65.3V794h-65.3V924.7z M238.7,206c29.6,0,29.6,0,65.3,0s65.3-29.6,65.3-65.3c0-35.7,29.6-65.3,65.3-65.3c35.7,0,65.3,29.6,65.3,65.3c0,35.7,32.7,65.3,65.3,65.3c32.7,0,33.7,0,65.3,0s65.3,29.6,65.3,65.3H173.3C173.3,231.5,201.9,206,238.7,206z M173.3,728.7H304v-65.3H173.3V728.7z M630.7,598V467.3l-261.3,196l261.3,196V728.7h326.7V598H630.7z M173.3,859.3h196V794h-196V859.3z M500,402H173.3v65.3H500V402z M304,532.7H173.3V598H304V532.7z" />
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div class="panel-actions">
                        <a href="{{ route(config('theme.rprefix') . '.moveDown', $setting->id) }}"
                            class="panel-action-btn" title="Move Down">
                            <img src="{{ nanopkg_asset('image/setting/arrow-down.svg') }}">

                        </a>
                        <a href="{{ route(config('theme.rprefix') . '.moveUp', $setting->id) }}"
                            class="panel-action-btn" title="Move Up">
                            <img src="{{ nanopkg_asset('image/setting/arrow-up.svg') }}">

                        </a>
                    </div>
                </div>
                <div class="panel-body mt-1 mb-3">
                    <div class="row">
                        <div class="col-md-12">
                            @switch($setting->type)
                                @case('text')
                                    <input id="{{ $setting->key }}" class="form-control" type="text"
                                        placeholder="Setting {{ $setting->display_name }}" name="data[{{ $setting->id }}]"
                                        id="data[{{ $setting->id }}]" value="{{ $setting->value }}"
                                        @if (array_key_exists('min', $setting->details)) min="{{ $setting->details['min'] }}" @endif
                                        @if (array_key_exists('max', $setting->details)) max="{{ $setting->details['max'] }}" @endif />
                                @break

                                @case('text_area')
                                    <textarea class="form-control" name="data[{{ $setting->id }}]" id="data[{{ $setting->id }}]"
                                        placeholder="Setting {{ $setting->display_name }}"
                                        @if (array_key_exists('minlength', $setting->details)) minlength="{{ $setting->details['minlength'] }}" @endif
                                        @if (array_key_exists('maxlength', $setting->details)) maxlength="{{ $setting->details['maxlength'] }}" @endif>{{ $setting->value }}</textarea>
                                @break

                                {{-- rich_text_box --}}
                                @case('rich_text_box')
                                    <textarea class='setting-tinymce' name="data[{{ $setting->id }}]" id="data[{{ $setting->id }}]"
                                        placeholder="Setting {{ $setting->display_name }}">{!! $setting->value !!}</textarea>
                                @break

                                {{-- code_editor --}}
                                @case('code_editor')
                                    <?php $options = $setting->details; ?>
                                    <!-- prettier-ignore-start -->
                                    <div id="{{ $setting->key }}" data-theme="{{ @$options->theme }}"
                                        data-language="{{ @$options->language }}" class="ace_editor min_height_400"
                                        name="data[{{ $setting->id }}]">{{
                                        $setting->value ?? '' }}</div>
                                    <!-- prettier-ignore-end -->
                                    <textarea name="data[{{ $setting->id }}]" id="{{ $setting->key }}_textarea" class="hidden">{{ $setting->value ?? '' }}</textarea>
                                @break

                                {{-- checkbox --}}
                                @case('checkbox')
                                    @foreach ($setting->details as $displayData => $key)
                                        <div class="form-check m-1">
                                            <input class="form-check-input" type="checkbox" name="data[{{ $setting->id }}]"
                                                value="{{ $key }}" @if ($key == $setting->value) checked @endif
                                                id="check{{ $key }}">
                                            <label class="form-check-label" for="check{{ $key }}">
                                                {{ $displayData }}
                                            </label>
                                        </div>
                                    @endforeach
                                @break

                                {{-- radio_btn --}}
                                @case('radio_btn')
                                    @foreach ($setting->details as $displayData => $key)
                                        <div class="form-check m-1">
                                            <input class="form-check-input" type="radio" name="data[{{ $setting->id }}]"
                                                id="check{{ $key }}" value="{{ $key }}"
                                                @if ($key == $setting->value) checked @endif>
                                            <label class="form-check-label" for="check{{ $key }}">
                                                {{ $displayData }}
                                            </label>
                                        </div>
                                    @endforeach
                                @break

                                {{-- select_dropdown --}}
                                @case('select_dropdown')
                                    <select class="select2 form-control" name="data[{{ $setting->id }}]"
                                        id="data[{{ $setting->id }}]">
                                        @if ($setting->value == null || $setting->value == '')
                                            <option disabled selected>{{ localize('Please Select one') }}</option>
                                        @endif

                                        @foreach ($setting->details as $displayData => $key)
                                            <option value="{{ $key }}"
                                                @if ($key == $setting->value) selected @endif>
                                                {{ $displayData }}
                                            </option>
                                        @endforeach
                                    </select>
                                @break

                                {{-- file --}}
                                @case('file')
                                    @isset($setting->value)
                                        <div class="mt-1 mb-2">
                                            <a href="{{ asset('storage/' . $setting->value) }}" target="_blank">
                                                <img src="{{ nanopkg_asset('image/setting/doument.svg') }}">
                                            </a>
                                            <a href="{{ route(config('theme.rprefix') . '.unsetValue', $setting->id) }}">
                                                <img src="{{ nanopkg_asset('image/setting/close.svg') }}">
                                            </a>
                                        </div>
                                    @endisset
                                    <input id="{{ $setting->key }}" class="form-control" type="file"
                                        placeholder="{{ $setting->display_name }}" name="data[{{ $setting->id }}]"
                                        @if (array_key_exists('accept', $setting->details)) accept="{{ $setting->details['accept'] }}" @endif />
                                @break

                                {{-- image --}}
                                @case('image')
                                    @isset($setting->value)
                                        <div class="mt-1 mb-2">
                                            <a href="{{ asset('storage/' . $setting->value) }}" target="_blank">
                                                <img src="{{ asset('storage/' . $setting->value) }}" class="setting_key_image">
                                            </a>
                                            <a href="{{ route(config('theme.rprefix') . '.unsetValue', $setting->id) }}">
                                                <img src="{{ nanopkg_asset('image/setting/close.svg') }}">
                                            </a>
                                        </div>
                                    @endisset
                                    <input id="{{ $setting->key }}" class="form-control" type="file"
                                        placeholder="{{ $setting->display_name }}" name="data[{{ $setting->id }}]"
                                        @if (array_key_exists('accept', $setting->details)) accept="{{ $setting->details['accept'] }}"
                                    @else
                                    accept="image/*" @endif />
                                @break

                                @default
                                    <input id="data[{{ $setting->id }}]" class="form-control" type="{{ $setting->type }}"
                                        value="{{ $setting->value }}" placeholder="{{ $setting->display_name }}"
                                        name="data[{{ $setting->id }}]" />
                            @endswitch
                            <div class="my-1">
                                {!! $setting->note !!}
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
            @empty
                <p class="text-muted text-center">{{ localize('No Setting Found...') }}</p>
            @endforelse

        </div>
        @if (count($settings) > 0)
            <div class="d-flex justify-content-end mt-5">
                <button type="submit" class="btn btn-success">{{ localize('Save Settings') }}</button>
            </div>
        @endif
        {{-- --}}
    </form>
    <span id="media-upload-url" data-file-upload-url="{{ route(config('theme.rprefix') . '.file-upload') }}"></span>
