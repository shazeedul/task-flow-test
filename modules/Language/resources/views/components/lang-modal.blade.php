<!-- Modal -->
<div class="modal fade" id="langModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{ localize('Add') }} {{ localize('Language') }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="{{ route(config('theme.rprefix') . '.store') }}" method="POST">
                @csrf
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12 text-start">
                            <div class="row">
                                <div class="col-md-4">
                                    <label>{{ localize('Short') }} {{ localize('Name') }}<span
                                            class="text-danger">*</span></label>
                                </div>
                                <div class="col-md-1">
                                    :
                                </div>
                                <div class="col-md-7 ">
                                    <input type="text" name="title" class="form-control"
                                        placeholder="{{ localize('Language') }} {{ localize('Short') }} Code(Ex: en)">
                                    @if ($errors->has('title'))
                                        <div class="error text-danger">{{ $errors->first('title') }}</div>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 text-start mt-4">
                            <div class="row">
                                <div class="col-md-4">
                                    <label>{{ localize('Language') }} {{ localize('Name') }}<span
                                            class="text-danger">*</span></label>
                                </div>
                                <div class="col-md-1">
                                    :
                                </div>
                                <div class="col-md-7 ">
                                    <input type="text" name="lang_name" class="form-control"
                                        placeholder="{{ localize('Language') }} {{ localize('Name') }}(Ex: English)">
                                    @if ($errors->has('lang_name'))
                                        <div class="error text-danger">{{ $errors->first('lang_name') }}</div>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-success">{{ localize('Submit') }}</button>
                </div>
            </form>
        </div>
    </div>
</div>
