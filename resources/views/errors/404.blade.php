<x-guest-layout class="bg-white">
    <div class="d-flex align-items-center justify-content-center text-center h-100vh">
        <div class="row justify-content-center">
            <div class="col-sm-12">
                <div class="four_zero_four_bg">
                    <h1 class="fw-bold text-monospace">404</h1>
                </div>
                <div class="contant_box_505">
                    <h3 class="h2">Not Found!</h3>
                    <p><b>404 - Not Found:</b>
                        {{ localize('Sorry, I looked everywhere, and still came up empty handed.') }}</p>
                </div>
                <div>
                    <a class="btn btn-success mt-3" href="{{ back_url() }}">
                        <i class="typcn typcn-arrow-back-outline mr-1"></i>
                        {{ localize('Back') }}
                    </a>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <x-admin.guest-footer class="text-center text-black" />

            </div>
        </div>
    </div>
</x-guest-layout>
