<?php

namespace Modules\Language\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;
use Modules\Language\Facades\Localizer;

class LocalizeController extends Controller
{
    /**
     * Constructor for the controller.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('strip_scripts_tag')->only(['store']);
        // set the request middleware for the controller
        $this->middleware('request:ajax', ['only' => ['index', 'store']]);
    }

    /**
     * Fetch the local language data.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->success(Localizer::getLocalizeData(app()->getLocale()), 'Local Language data retrieved successfully.', 200);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'key' => 'required',
        ]);
        $data['key'] = Localizer::formatKey($data['key']);
        Localizer::storeLocal($data['key']);

        return response()->success(Localizer::getLocalizeData(app()->getLocale()), 'Local Language data store Successfully.', 200);
    }

    /**
     * Change the local language.
     *
     * @param  mixed  $locale
     * @return \Illuminate\Http\RedirectResponse|mixed
     */
    public function changeLocal($locale)
    {
        App::setlocale($locale);
        Session::put('locale', $locale);

        return redirect()->back();
    }
}
