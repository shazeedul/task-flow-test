<?php

namespace Modules\Setting\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Artisan;

class ModuleSettingController extends Controller
{
    /**
     * Constructor for the controller.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'permission:module_setting_management']);
        $this->middleware('strip_scripts_tag')->only(['update']);
        \cs_set('theme', [
            'title' => 'Module Setting',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ],
                [
                    'name' => 'Module Setting',
                    'link' => false,
                ],
            ],
            'rprefix' => 'admin.setting.module',
        ]);
    }

    public function index()
    {
        $data = json_decode(file_get_contents(config('modules.activators.file.statuses-file')));

        return \view('setting::module.index', [
            'data' => $data,
        ]);
    }

    public function update(Request $request)
    {
        if ($request->has('modules')) {
            $modules = $request->get('modules');
            $data = json_decode(file_get_contents(config('modules.activators.file.statuses-file')));
            foreach ($data as $key => $value) {
                if (array_key_exists($key, $modules)) {
                    $data->$key = true;
                } else {
                    $data->$key = false;
                }
            }
            file_put_contents(config('modules.activators.file.statuses-file'), json_encode($data));
        }

        Artisan::call('optimize');

        return \redirect()->back()->with('success', 'Module status updated successfully.');
    }
}
