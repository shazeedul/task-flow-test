<?php

use Modules\Language\Models\Language;

function localize(?string $key, ?string $default_value = null, ?string $locale = null): ?string
{
    if (is_null($key) || $key == '' || $key == ' ' || empty($key)) {
        return '';
    }

    return Modules\Language\Facades\Localizer::localize($key, $default_value, $locale);
}

function _localize(?string $key, ?string $default_value = null, ?string $locale = null): ?string
{
    if (is_null($key) || $key == '' || $key == ' ' || empty($key)) {
        return '';
    }

    return Modules\Language\Facades\Localizer::localize($key, $default_value, $locale);
}

function getLocalizeLang()
{

    return Language::cacheDataQuery('_active_', Language::active()->get());
}
