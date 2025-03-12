<!--Global script(used by all pages)-->
<script src="{{ admin_asset('vendor/jQuery/jquery.min.js') }}"></script>
<script src="{{ admin_asset('vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
@stack('lib-scripts')
{{-- <script src="{{ nanopkg_asset('vendor/highlight/highlight.min.js') }}"></script> --}}
<script src="{{ admin_asset('vendor/metisMenu/metisMenu.min.js') }}"></script>
<script src="{{ admin_asset('vendor/perfect-scrollbar/dist/perfect-scrollbar.min.js') }}"></script>
<script src="{{ nanopkg_asset('vendor/sweetalert2/sweetalert2.min.js') }}"></script>
<script src="{{ nanopkg_asset('vendor/fontawesome-free-6.3.0-web/js/all.min.js') }}"></script>
<script src="{{ nanopkg_asset('vendor/toastr/build/toastr.min.js') }}"></script>
<script src="{{ nanopkg_asset('vendor/axios/dist/axios.min.js') }}"></script>
<script src="{{ nanopkg_asset('vendor/typed.js/lib/typed.min.js') }}"></script>
<script src="{{ nanopkg_asset('vendor/jquery-validation-1.19.5/jquery.validate.min.js') }}"></script>
<script src="{{ nanopkg_asset('js/axios.init.min.js') }}"></script>
<script src="{{ nanopkg_asset('js/arrow-hidden.min.js') }}"></script>
<script src="{{ nanopkg_asset('js/img-src.min.js') }}"></script>
<script src="{{ nanopkg_asset('js/delete.min.js') }}"></script>
<script src="{{ nanopkg_asset('js/user-status-update.min.js') }}"></script>
<script src="{{ nanopkg_asset('js/main.js') }}"></script>

<!--Page Scripts(used by all page)-->
<script src="{{ admin_asset('js/sidebar.min.js') }}"></script>
@stack('js')
