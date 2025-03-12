<x-app-layout>
    <x-card>
        <x-slot name='actions'>
            <a href="{{ route(config('theme.rprefix') . '.index') }}" class="btn btn-success btn-sm">
                <i class="fa fa-list"></i>&nbsp;
                {{ localize('Task List') }}
            </a>
        </x-slot>
        <div class="card-body">
            <form action="{{ route('admin.task.update', $item->id) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="project_id" class="form-label">{{ localize('Project') }}</label>
                            <select name="project_id" id="project_id" class="form-control basic-single"
                                data-ajax-url="{{ route('admin.task.get-projects') }}"
                                data-placeholder="{{ localize('Select Project') }}">
                                <option value="{{ $item->project_id }}" @selected(true)>
                                    {{ $item->project?->title }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="assigned_to" class="form-label">{{ localize('Assigned To') }}</label>
                            <select name="assigned_to" id="assigned_to" class="form-control basic-single"
                                data-ajax-url="{{ route('admin.task.get-users') }}"
                                data-placeholder="{{ localize('Select User') }}">
                                <option value="{{ $item->assigned_to }}" @selected(true)>
                                    {{ $item->assignedUser?->name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="title" class="form-label">{{ localize('Title') }}</label>
                            <input type="text" name="title" id="title" class="form-control"
                                placeholder="{{ localize('Enter Title') }}" value="{{ $item->title }}">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="description" class="form-label">{{ localize('Description') }}</label>
                            <textarea name="description" id="description" class="form-control" rows="3">
                                {{ $item->description }}
                            </textarea>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="status" class="form-label">{{ localize('Status') }}</label>
                            <select name="status" id="status" class="form-control basic-single"
                                data-placeholder="{{ localize('Select Status') }}">
                                <option value="not_started" @selected($item->status == 'not_started')>{{ localize('Not Started') }}
                                </option>
                                <option value="in_progress" @selected($item->status == 'in_progress')>{{ localize('In Progress') }}
                                </option>
                                <option value="completed" @selected($item->status == 'completed')>{{ localize('Completed') }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="priority" class="form-label">{{ localize('Priority') }}</label>
                            <select name="priority" id="priority" class="form-control basic-single"
                                data-placeholder="{{ localize('Select Priority') }}">
                                <option value="low" @selected($item->priority == 'low')>{{ localize('Low') }}</option>
                                <option value="medium" @selected($item->priority == 'medium')>{{ localize('Medium') }}</option>
                                <option value="high" @selected($item->priority == 'high')>{{ localize('High') }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="attachment" class="form-label">{{ localize('Attachment') }}</label>
                            <input type="file" name="attachment[]" id="attachment" class="form-control" multiple>
                            @foreach ($item->attachments as $attachment)
                                <a href="{{ asset($attachment->path) }}" target="_blank">
                                    {{ $attachment->name }}
                                </a>
                            @endforeach
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                        <button type="submit" class="btn btn-success">{{ localize('Update') }}</button>
                    </div>
                </div>
            </form>
        </div>
    </x-card>
    @push('lib-styles')
        <link href="{{ admin_asset('vendor/select2/dist/css/select2.min.css') }}" rel="stylesheet" type="text/css" />
    @endpush
    @push('lib-scripts')
        <script src="{{ admin_asset('vendor/select2/dist/js/select2.min.js') }}"></script>
    @endpush
    @push('js')
        <script src="{{ module_asset('TaskFlow/js/create_task.js') }}"></script>
    @endpush
</x-app-layout>
