<footer {{ $attributes->merge(['class' => 'footer-content border-top']) }}>
    <div class="footer-text">
        <div class="row">
            <div class="col-md-6 text-center text-md-start">
                <div class="copy">
                    © {{ date('Y') }} <a class="text-capitalize text-black" href="{{ config('app.url') }}"
                        target="_blank">{{ localize(config('app.name')) }}</a>.
                </div>
            </div>
            <div class="col-md-6 text-center  text-md-end">
                <div class="credit">@localize('Designed_and_Developed_by'): <a class="text-black text-capitalize"
                        href="https://www.bdtask.com/" target="_blank">{{ localize('Bdtask') }}<a>
                </div>
            </div>
        </div>
    </div>
</footer>
