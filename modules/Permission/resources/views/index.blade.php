<x-app-layout>
    <x-card>
        <div>
            <x-data-table :dataTable="$dataTable" />
        </div>
    </x-card>
    @push('modal')
        <x-modal id="create-permission-modal" :title="localize('Create Permission')">

            <form action="javascript:void();" class="needs-validation" id="create-permission-form">
                <div class="modal-body">
                    <div class="row">
                        <div class="cust_border form-group mb-3 mx-0 pb-3 row">
                            <label for="create-permission-group" class="col-lg-3 col-form-label ps-0 label_permission_group">
                                {{ localize('Permission Group') }}
                                <span class="text-danger">*</span>
                            </label>
                            <div class="col-lg-9 p-0">
                                <select name="group" id="create-permission-group" class="form-control"> </select>

                            </div>
                        </div>

                        <div class="cust_border form-group mb-3 mx-0 pb-3 row">
                            <label for="permission_name" class="col-lg-3 col-form-label ps-0 label_permission_name">
                                {{ localize('Permission Name') }}
                                <span class="text-danger">*</span>
                            </label>
                            <div class="col-lg-9 p-0">
                                <input type="text" class="form-control" name="name" id="permission_name"
                                    placeholder="{{ localize('Permission Name') }} " autocomplete required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">{{ localize('Close') }}</button>
                    <button class="btn btn-success" type="submit" id="create_submit">{{ localize('Add') }}</button>
                </div>
            </form>

        </x-modal>
        <x-modal id="edit-permission-modal" :title="localize('Update Permission')">
            <form action="javascript:void();" class="needs-validation" id="update-permission-form">
                <input type="hidden" name="id" id="update_permission_id">
                <div class="modal-body">
                    <div class="row">
                        <div class="cust_border form-group mb-3 mx-0 pb-3 row">
                            <label for="edit-permission-group" class="col-lg-3 col-form-label ps-0 label_permission_group">
                                {{ localize('Permission Group') }}
                                <span class="text-danger">*</span>
                            </label>
                            <div class="col-lg-9 p-0">
                                <select name="group" id="edit-permission-group" class="form-control"></select>

                            </div>
                        </div>
                        <div class="cust_border form-group mb-3 mx-0 pb-3 row">
                            <label for="update_permission_name" class="col-lg-3 col-form-label ps-0 label_permission_name">
                                {{ localize('Permission Name') }}
                                <span class="text-danger">*</span>
                            </label>
                            <div class="col-lg-9 p-0">
                                <input type="text" class="form-control" name="name" id="update_permission_name"
                                    placeholder="{{ localize('Permission Name') }} " autocomplete required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">{{ localize('Close') }}</button>
                    <button class="btn btn-success" type="submit" id="create_submit">{{ localize('Update') }}</button>
                </div>
            </form>
        </x-modal>
        <x-modal id="delete-permission-modal" :title="localize('Delete Permission')">
            <form action="javascript:void();" class="needs-validation" id="delete-permission-modal-form">
                <input type="hidden" name="id" id="update_permission_delete_id">
                <div class="modal-body">
                    <p>{{ 'You won\'t be able to revert this!' }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">{{ localize('Close') }}</button>
                    <button class="btn btn-success" type="submit" id="create_submit">{{ localize('Delete') }}</button>
                </div>
            </form>
        </x-modal>
    @endpush
    <div id="page-axios-data" data-table-id="#permission-table"
        data-create="{{ route(config('theme.rprefix') . '.store') }}"
        data-edit="{{ route(config('theme.rprefix') . '.edit') }}"
        data-update="{{ route(config('theme.rprefix') . '.update') }}"
        data-only-groups="{{ route(config('theme.rprefix') . '.only-groups') }}">
    </div>
    @push('lib-styles')
        <link href="{{ admin_asset('vendor/select2/dist/css/select2.min.css') }}" rel="stylesheet" type="text/css" />
    @endpush
    @push('lib-scripts')
        <script src="{{ admin_asset('vendor/select2/dist/js/select2.min.js') }}"></script>
    @endpush
    @push('js')
        <script src="{{ module_asset('Permission/js/index.min.js') }}"></script>
    @endpush
</x-app-layout>
