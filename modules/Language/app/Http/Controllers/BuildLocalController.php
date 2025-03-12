<?php

namespace Modules\Language\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Language\Models\Language;
use Modules\Language\Facades\Localizer;
use Yajra\DataTables\Facades\DataTables;

class BuildLocalController extends Controller
{
    /**
     * Constructor for the controller.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'permission:language_setting_management']);
        $this->middleware('strip_scripts_tag')->only(['store', 'update']);
        \cs_set('theme', [
            'title' => 'Setting',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ],
                [
                    'name' => 'Language Setting',
                    'link' => false,
                ],
            ],
            'rprefix' => 'admin.language.build',
        ]);
    }

    public function index($code)
    {
        $language = Language::where('code', $code)->first();
        if (! $language) {
            return abort(404);
        }

        return view('language::build', [
            'language' => $language,
        ]);

    }

    public function translatable(Language $language)
    {
        cs_set('theme', [
            'title' => _localize('Translate').$language->title.' ('.$language->code.')'._localize('Language'),
        ]);

        return view('language::translatable', [
            'language' => $language,
        ])->render();
    }

    public function translate($code, Request $request)
    {
        $data = $request->validate([
            'build_from' => 'required',
        ]);
        try {
            Localizer::autoTranslate($data['build_from'], $code);
        } catch (\Throwable $th) {
            return response()->error([], _localize('Local translate not possible.'));
        }

        return response()->success([], _localize('Local translate successfully'));

    }

    public function dataTableAjax($code, Request $request)
    {
        $localize = Localizer::getLocalizeData($code);

        // convert array to collection key  is a new key and value is a new key
        $localize = collect($localize)->map(function ($item, $key) {
            return [
                'key' => $key,
                'value' => $item,
            ];
        });

        return DataTables::of($localize)
            ->addColumn('action', function ($item) {
                // You can add form elements or buttons for actions here
                return '<button class="btn btn-danger">Delete</button>';
            })
            ->rawColumns(['action'])
            ->make(true);
    }

    public function dataTableAjaxUpdate($code, Request $request)
    {
        $data = $request->validate([
            'key' => 'required',
            'new_key' => 'nullable',
            'value' => 'nullable',
        ]);
        $data['key'] = Localizer::formatKey($data['key']);
        if ($data['new_key']) {
            $data['new_key'] = Localizer::formatKey($data['new_key']);
            Localizer::deleteLocal($data['key'], $code);
            $data['key'] = $data['new_key'];
        }
        Localizer::storeLocal($data['key'], $data['value'] ?? '', $code);

        return response()->success([], 'Local updated successfully');
    }

    public function dataTableAjaxDestroy($code, Request $request)
    {
        $data = $request->validate([
            'key' => 'required',
        ]);
        Localizer::deleteLocal($data['key'], $code);

        return response()->success([], 'Local deleted successfully');
    }

    public function store($code, Request $request)
    {
        if ($request->has('key') && $request->has('label') && count($request->key) == count($request->label)) {
            $local = [];
            foreach ($request->key as $key => $value) {
                $local[$value] = $request->label[$key];
            }
            Localizer::bulkStore($local, $code);

            return response()->success([], 'Local updated successfully');
        }
    }
}
