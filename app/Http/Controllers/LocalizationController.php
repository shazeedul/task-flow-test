<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;

class LocalizationController extends Controller
{
    public function switchLang($lang)
    {
        Session::put('locale', $lang);

        return redirect()->back();
    }
}
