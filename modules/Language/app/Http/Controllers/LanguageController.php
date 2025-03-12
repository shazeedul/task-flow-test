<?php

namespace Modules\Language\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Language\DataTables\LanguageDataTable;
use Modules\Language\Models\Language;
use Modules\Language\Facades\Localizer;

class LanguageController extends Controller
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
        // set the request middleware for the controller
        $this->middleware('request:ajax', ['only' => ['create', 'store', 'edit', 'update', 'destroy']]);
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
            'rprefix' => 'admin.language',
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return mixed
     */
    public function index(LanguageDataTable $dataTable)
    {
        return $dataTable->render('language::index');
    }

    /**
     * Create the specified resource.
     */
    public function create()
    {
        cs_set('theme', [
            'title' => 'Create New Language',
        ]);

        return view('language::create_edit')->render();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required',
            'code' => 'required|unique:languages,code',
            'status' => 'required|boolean',
            'build_from' => 'nullable',
        ]);

        $data['code'] = Localizer::formatKey($data['code']);
        Localizer::createLocalizeFile($data['code'], $data['build_from']);
        $language = Language::create($data);

        return response()->success($language, 'Local Language created successfully.', 201);
    }

    /**
     * Show the show page for showing the specified resource.
     */
    public function edit(Language $language)
    {
        cs_set('theme', [
            'title' => 'Edit Existing Language',
            'update' => route(config('theme.rprefix') . '.update', $language->id),
        ]);

        // return the response
        return view('language::create_edit')->with('item', $language)->render();
    }

    public function update(Language $language, Request $request)
    {
        $data = $request->validate([
            'title' => 'required',
            'code' => 'required|unique:languages,code,' . $language->id,
            'status' => 'required|boolean',
            'build_from' => 'nullable',
        ]);

        $data['code'] = Localizer::formatKey($data['code']);
        Localizer::updateLocalizeFile($language->code, $data['code'], $data['build_from']);
        $language->update($data);

        return response()->success($language, 'Local Language updated successfully.', 200);
    }

    /**
     * Destroy the specified resource.
     *
     * @return mixed
     */
    public function destroy(Language $language)
    {

        Localizer::deleteLocalizeFile($language->code);
        $language->delete();

        return response()->success($language, 'Local Language deleted successfully.', 200);
    }
}
