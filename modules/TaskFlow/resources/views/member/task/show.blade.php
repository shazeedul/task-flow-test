<div class="card-header my-3 p-2 border-bottom">
    <h4>{{ config('theme.title') }}</h4>
</div>
<div class="modal-body">
    <div class="col-12">
        <label class="form-label fs-18 fw-semi-bold">{{ localize('Project') }}</label>
        <input type="text" class="form-control" name="project" value="{{ $item->project?->title }}" readonly />
    </div>
    <div class="col-12">
        <label class="form-label fs-18 fw-semi-bold">{{ localize('Title') }}</label>
        <input type="text" class="form-control" name="title" value="{{ $item->title }}" readonly />
    </div>
    <div class="col-12">
        <label class="form-label fs-18 fw-semi-bold">{{ localize('Description') }}</label>
        <textarea class="form-control" name="description" rows="3" readonly>{{ $item->description }}</textarea>
    </div>
    <div class="col-12">
        <label class="form-label fs-18 fw-semi-bold">{{ localize('Priority') }}</label>
        <input type="text" class="form-control" name="priority" value="{{ ucfirst($item->priority) }}" readonly />
    </div>
    <div class="col-12">
        <label class="form-label fs-18 fw-semi-bold">{{ localize('Status') }}</label>
        <input type="text" class="form-control" name="status"
            value="{{ ucwords(str_replace('_', ' ', $item->status)) }}" readonly />
    </div>
    <div class="col-12">
        <label class="form-label fs-18 fw-semi-bold">{{ localize('Attachments') }}</label>
        <div class="row">
            @foreach ($item->attachments as $attachment)
                <div class="col-12">
                    <a href="{{ storage('app/public/task_attachments/' . $attachment->path) }}"
                        target="_blank">{{ $attachment->name }}</a>
                </div>
            @endforeach
        </div>
    </div>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-danger shadow-none rounded-10 px-4 py-2 lh-lg fw-semi-bold"
        data-bs-dismiss="modal">@localize('Close')</button>
</div>
