<form
    action="{{ isset($item) ? route(config('theme.rprefix') . '.update', $item->id) : route(config('theme.rprefix') . '.store') }}"
    method="POST" class="needs-validation modal-content" novalidate="novalidate" enctype="multipart/form-data"
    onsubmit="submitFormAxios(event)">
    @csrf
    @if (isset($item))
        @method('PUT')
    @endif
    <div class="card-header my-3 p-2 border-bottom">
        <h4>{{ config('theme.title') }}</h4>
    </div>
    <div class="modal-body">
        <div class="col-12">
            <label class="form-label fs-18 fw-semi-bold">{{ localize('Title') }}</label>
            <span class="text-danger">*</span>
            <input type="text" class="form-control" name="title"
                value="{{ isset($item) ? $item->title : old('title') }}" />
        </div>
        <div class="col-12">
            <label class="form-label fs-18 fw-semi-bold">{{ localize('Description') }}</label>
            <textarea class="form-control" name="description" rows="3">{{ isset($item) ? $item->description : old('description') }}</textarea>
        </div>
        <div class="col-12">
            <label class="form-label fs-18 fw-semi-bold">{{ localize('Deadline') }}</label>
            <input type="date" class="form-control" name="deadline"
                value="{{ isset($item) ? date('Y-m-d', strtotime($item->deadline)) : old('deadline') }}" />
        </div>
    </div>
    <div class="modal-footer">
        @if (!isset($item))
            <button type="reset"
                class="btn btn-inverse shadow-none rounded-10 px-4 py-2 lh-lg fw-semi-bold">@localize('Reset')</button>
        @endif
        <button type="button" class="btn btn-danger shadow-none rounded-10 px-4 py-2 lh-lg fw-semi-bold"
            data-bs-dismiss="modal">@localize('Close')</button>
        <button class="btn btn-success px-4 py-2 lh-lg fw-semi-bold" type="submit">@localize('Save')</button>
    </div>
</form>
