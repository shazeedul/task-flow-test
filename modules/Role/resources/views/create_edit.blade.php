<x-app-layout>
    <x-card>
        <x-slot name='actions'>
            <a href="{{ route(config('theme.rprefix') . '.index') }}" class="btn btn-success btn-sm"><i
                    class="fa fa-list"></i>&nbsp;{{ localize('Role List') }}</a>
        </x-slot>

        <div>
            <form enctype="multipart/form-data"
                action="{{ isset($item) ? route(config('theme.rprefix') . '.update', $item->id) : route(config('theme.rprefix') . '.store') }}"
                method="POST" class="needs-validation" enctype="multipart/form-data">
                @csrf
                @isset($item)
                    @method('PUT')
                @endisset
                <div class=" row">
                    <div class="col-md-12">
                        <div class="form-group pt-1 pb-1">
                            <label for="name" class="font-black">{{ localize('Role Name') }}</label>
                            <input type="text" class="form-control" name="name" id="name"
                                placeholder="{{ localize('Enter Role Name...') }}"
                                value="{{ isset($item) ? $item->name : old('name') }}" required>
                            @error('name')
                                <p class="text-danger pt-2">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>

                    <div class="col-md-12 pt-1 pb-1">
                        <div>
                            <h5 class="border-bottom py-1 mx-1 mb-0 font-medium-2 font-black mt-5">
                                <i class="feather icon-lock mr-50 "></i>
                                {{ localize('Permission') }}
                            </h5>
                            <div class="row mt-1">
                                @forelse (Modules\Permission\Models\Permission::groups() as $gName=>$g)
                                    <div class="col-md-12">
                                        <fieldset>
                                            <legend>
                                                {{ $gName }}
                                            </legend>
                                            <div class="row py-3">
                                                @forelse ($g as $p)
                                                    <div class="col-md-4 form-group">
                                                        <div class="form-check form-switch">
                                                            <input class="form-check-input" type="checkbox"
                                                                role="switch" id="{{ $p->name }}"
                                                                name="permissions[{{ $p->id }}]"
                                                                {{ config('theme.edit') ? (permission_check($item->permissions, $p->id) ? 'checked' : '') : '' }}
                                                                value="{{ $p->id }}">
                                                            <label class="form-check-label" for="{{ $p->name }}">
                                                                {{ permission_key_to_name($p->name) }}
                                                            </label>
                                                        </div>
                                                    </div>
                                                @empty
                                                    <div class="col-md-12 text-center p-5">
                                                        <p class="text-danger">{{ localize('No Permission Found') }}
                                                        </p>
                                                    </div>
                                                @endforelse
                                            </div>

                                        </fieldset>
                                    </div>
                                @empty
                                    <div class="col-md-12 text-center p-5">
                                        <p class="text-danger">{{ localize('No Permission Group') }}</p>
                                    </div>
                                @endforelse
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 ">
                        <div class="form-group pt-1 pb-1 text-center">
                            <button type="submit" class="btn btn-success btn-round">{{ localize('Save') }}</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </x-card>

</x-app-layout>
