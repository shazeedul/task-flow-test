<?php

return [
    'name' => 'Setting',

    'cache' => env('SETTING_CACHE', true),

    'cacheKey' => [
        'default' => '__Settings__',
        'asc' => config('setting.cacheKey.default').'__ASC__',
        'desc' => config('setting.cacheKey.default').'__DESC__',
        'group' => config('setting.cacheKey.default').'__Group__',
    ],
];
