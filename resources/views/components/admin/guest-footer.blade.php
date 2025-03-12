<footer {{ $attributes->merge(['class' => '']) }}>
    <div class="">
        <div class="copy">© {{ date('Y') }} <a class="text-capitalize" href="{{ config('app.url') }}"
                target="_blank">{{ config('app.name') }}</a>.</div>
        <div class="credit">{{ localize('Designed & Developed by') }}: <a href="https://www.bdtask.com/"
                target="_blank">{{ localize('Bdtask') }}<a></div>
    </div>
</footer>
