<?php

namespace App\Traits;

trait RemovePrefixFromSearch
{
    public function removePrefix($prefix)
    {
        if (isset(request('search')['value'])) {
            $search = request('search')['value'];
            if (strpos($search, $prefix) !== false) {
                $search = str_replace($prefix, '', $search);
                request()->merge(['search' => ['value' => $search]]);
            }
        }
    }
}
