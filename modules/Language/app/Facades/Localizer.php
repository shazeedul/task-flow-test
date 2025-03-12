<?php

namespace Modules\Language\Facades;

use Illuminate\Support\Facades\Facade;

class Localizer extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'localizer';
    }
}
