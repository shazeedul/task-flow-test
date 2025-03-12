<?php

namespace Modules\Setting\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class MailSettingController extends Controller
{
    /**
     * Constructor for the controller.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'permission:mail_setting_management']);
        $this->middleware('strip_scripts_tag')->only(['update']);
        \cs_set('theme', [
            'title' => 'Mail Setting',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ],
                [
                    'name' => 'Mail Setting',
                    'link' => false,
                ],
            ],
            'rprefix' => 'admin.setting.mail',
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        $env = readEnvFile();

        // get the value of the specific key
        $data = [
            'MAIL_MAILER' => $env['MAIL_MAILER'] ?? null,
            'MAIL_HOST' => $env['MAIL_HOST'] ?? null,
            'MAIL_PORT' => $env['MAIL_PORT'] ?? null,
            'MAIL_USERNAME' => $env['MAIL_USERNAME'] ?? null,
            'MAIL_PASSWORD' => $env['MAIL_PASSWORD'] ?? null,
            'MAIL_ENCRYPTION' => $env['MAIL_ENCRYPTION'] ?? null,
            'MAIL_FROM_ADDRESS' => $env['MAIL_FROM_ADDRESS'] ?? null,
            'MAIL_FROM_NAME' => $env['MAIL_FROM_NAME'] ?? null,

        ];

        return \view('setting::mail.index', [
            'data' => $data,
        ]);
    }

    /**
     * Update the specified resource from settings table.
     *
     * @return \Illuminate\Http\RedirectResponse|mixed
     */
    public function update(Request $request)
    {
        $mail = $request->validate([
            'MAIL_MAILER' => 'required|in:smtp,sendmail,mailgun,ses,postmark,log,array,failover',
            'MAIL_HOST' => 'nullable|string',
            'MAIL_PORT' => 'nullable|numeric',
            'MAIL_USERNAME' => 'nullable|string',
            'MAIL_PASSWORD' => 'nullable|string',
            'MAIL_ENCRYPTION' => 'nullable|in:tls,ssl',
            'MAIL_FROM_ADDRESS' => 'nullable|email',
            'MAIL_FROM_NAME' => 'nullable|string',
        ]);
        // update the env file
        writeEnvFile($mail);
        Session::flash('success', 'Mail Setting Successfully Saved');

        return \redirect()->back();
    }
}
