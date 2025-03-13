<form action="{{ route(config('theme.member_rprefix') . '.comment.store', $item->id) }}" method="POST"
    class="needs-validation modal-content" novalidate="novalidate" enctype="multipart/form-data"
    onsubmit="submitFormAxios(event)">
    @csrf
    <div class="card-header my-3 p-2 border-bottom">
        <h4>{{ config('theme.title') }}</h4>
    </div>
    <div class="modal-body">
        <div class="col-12">
            <label class="form-label fs-18 fw-semi-bold">{{ localize('Previous Comments') }}</label>
            @forelse ($last10Comments as $comment)
                <li>{!! $comment->comment !!}</li>
            @empty
                <div class="alert alert-info">
                    {{ localize('No comments found') }}
                </div>
            @endforelse
        </div>
        <div class="col-12">
            <label class="form-label fs-18 fw-semi-bold">{{ localize('Comment') }}</label>
            <textarea class="form-control" name="comment" rows="3"></textarea>
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-danger shadow-none rounded-10 px-4 py-2 lh-lg fw-semi-bold"
            data-bs-dismiss="modal">@localize('Close')</button>
        <button class="btn btn-success px-4 py-2 lh-lg fw-semi-bold" type="submit">@localize('Save')</button>
    </div>
</form>
