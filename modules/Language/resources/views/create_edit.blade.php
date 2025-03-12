 <form action="{{ config('theme.update') ?? route(config('theme.rprefix') . '.store') }}" method="POST"
     class="needs-validation modal-content" novalidate="novalidate" enctype="multipart/form-data"
     onsubmit="submitFormAxios(event)">
     @csrf
     @if (config('theme.update'))
         @method('PUT')
     @endif
     <div class="my-3 p-2 border-bottom">
         <h4>{{ config('theme.title') }}</h4>
     </div>
     <div class="modal-body text-capitalize">
         <div class="my-2">
             <label for="title" class="fw-bold ">
                 {{ _localize('Language Title') }}
                 <span class="text-danger">*</span>
             </label>
             <input type="txt" class="form-control" name="title" id="title"
                 value="{{ $item->title ?? old('title') }}" placeholder="{{ _localize('Language Title') }}" required>
         </div>
         <div class="my-2">
             <label for="code" class="fw-bold ">
                 {{ _localize('Language Short Code') }}
                 <span class="text-danger">*</span>
             </label>
             <input type="txt" class="form-control" name="code" id="code"
                 value="{{ $item->code ?? old('code') }}" placeholder="{{ _localize('Language Code') }}" required>
         </div>
         <div class="my-2">
             <label for="build_from" class="fw-bold ">
                 {{ _localize('Choose Builder File') }}
                 <span class="text-danger">*</span>
             </label>
             <select name="build_from" id="build_from" class="form-control">
                 <option value="" selected>-- {{ _localize('No Builder File') }} --</option>
                 @foreach (getLocalizeLang() as $language)
                     <option value="{{ $language->code }}">{{ $language->title }}</option>
                 @endforeach
             </select>
         </div>
         <div class="my-2">
             <label for="code" class="fw-bold ">
                 {{ _localize('Language Status') }}
             </label>
             <div class="form-check">
                 <input class="form-check-input" type="radio" name="status" id="status-active"
                     @checked(($item->status ?? old('status')) == 1) value="1">
                 <label class="form-check-label" for="status-active">
                     {{ _localize('Active') }}
                 </label>
             </div>
             <div class="form-check">
                 <input class="form-check-input" type="radio" name="status" id="status-inactive"
                     @checked(($item->status ?? old('status')) == 0) value="0">
                 <label class="form-check-label" for="status-inactive">
                     {{ _localize('Inactive') }}
                 </label>
             </div>
         </div>
     </div>
     <div class="modal-footer text-capitalize">
         <button type="button" class="btn btn-danger" data-bs-dismiss="modal">{{ _localize('Close') }}</button>
         <button class="btn btn-success" type="submit">{{ _localize('Save') }}</button>
     </div>
 </form>
