<?php

namespace Modules\Setting\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Session;

class EnvSettingController extends Controller
{
    /**
     * Constructor for the controller.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'permission:env_setting_management']);
        $this->middleware('strip_scripts_tag')->only(['update']);
        \cs_set('theme', [
            'title' => 'ENV Setting',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ],
                [
                    'name' => 'ENV Setting',
                    'link' => false,
                ],
            ],
            'rprefix' => 'admin.setting.env',
        ]);
    }

    public function index()
    {
        $env = readEnvFile();

        // get the value of the specific key
        $data = [
            'APP_NAME' => $env['APP_NAME'] ?? null,
            'APP_ENV' => $env['APP_ENV'] ?? null,
            'APP_URL' => $env['APP_URL'] ?? null,
            'APP_DEBUG' => $env['APP_DEBUG'] ?? null,
            'FORCE_HTTPS' => $env['FORCE_HTTPS'] ?? null,
        ];

        return \view('setting::env.index', [
            'data' => $data,
        ]);
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'APP_NAME' => 'nullable|string',
            'APP_ENV' => 'nullable|string',
            'APP_URL' => 'nullable|url',
            'APP_DEBUG' => 'nullable|boolean',
            'FORCE_HTTPS' => 'nullable|boolean',
        ]);
        if (! isset($data['APP_DEBUG'])) {
            $data['APP_DEBUG'] = 'false';
        } else {
            $data['APP_DEBUG'] = 'true';
        }
        if (! isset($data['FORCE_HTTPS'])) {
            $data['FORCE_HTTPS'] = 'false';
        } else {
            $data['FORCE_HTTPS'] = 'true';
        }
        // update the env file
        writeEnvFile($data);
        Session::flash('success', 'Open Ai Setting Successfully Saved');

        return \redirect()->back();
    }
}
