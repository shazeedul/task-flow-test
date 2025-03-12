 <form action="{{ route(config('theme.rprefix') . '.translatable', $language->code) }}" method="POST"
     class="needs-validation modal-content" novalidate="novalidate" enctype="multipart/form-data"
     onsubmit="submitFormAxios(event)">
     @csrf
     <div class="header my-3 p-2 border-bottom">
         <h4>{{ config('theme.title') }}</h4>
     </div>
     <div class="modal-body text-capitalize">
         <div class="my-2">
             <label for="build_from" class="fw-bold ">
                 {{ _localize('Choose Builder File') }}
                 <span class="text-danger">*</span>
             </label>
             <select name="build_from" id="build_from" class="form-control">
                 <option value="" selected>-- {{ _localize('No Builder File') }} --</option>
                 @foreach (getLocalizeLang() as $lan)
                     <option value="{{ $lan->code }}">{{ $lan->title }}</option>
                 @endforeach
             </select>
         </div>

         <div class="my-2">
             <label for="code" class="fw-bold ">
                 {{ _localize('Translate To') }}
                 <span class="text-danger">*</span>
             </label>
             <input type="txt" class="form-control" name="code" id="code" value="{{ $language->code }}"
                 placeholder="{{ _localize('Translate To') }}" disabled>
         </div>
     </div>
     <div class="modal-footer text-capitalize">
         <button type="button" class="btn btn-danger" data-bs-dismiss="modal">{{ _localize('Close') }}</button>
         <button class="btn btn-success" type="submit">{{ _localize('Translate') }}</button>
     </div>
 </form>
