<?php

namespace Modules\Setting\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Modules\Setting\Facades\Setting as SettingFacades;
use Modules\Setting\Models\Setting;

class SettingController extends Controller
{
    /**
     * Constructor for the controller.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'permission:setting_management']);
        $this->middleware('strip_scripts_tag')->only(['store', 'update']);
        \cs_set('theme', [
            'title' => 'Setting',
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('admin.dashboard'),
                ],
                [
                    'name' => 'Setting',
                    'link' => false,
                ],
            ],
            'rprefix' => 'admin.setting',
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index(Request $request)
    {
        $settings = new Setting();

        if ($request->has('g')) {
            $settings = $settings->where('group', $request->g);
        } else {
            $settings = $settings->where('group', 'general');
        }

        return \view('setting::index', [
            'settings' => $settings->orderBy('order', 'asc')->get(),
            'groups' => [],
        ]);
    }

    /**
     * Creating a new setting.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function create()
    {
        return \view('setting::create', [
            'S_TYPES' => Setting::TYPES,
            'groups' => SettingFacades::onlyGroup(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request;
        if (! isset($request->group)) {
            $data['group'] = 'general';
        }
        $data['key'] = implode('_', explode(' ', (Str::lower($data->group)))).'.'.\implode('_', explode(' ', $data->key));

        $data['details'] = (array) \json_decode($request->details);
        $data['details'] = \json_encode($request->details);
        $data->validate([
            'key' => 'required|unique:settings|max:255',
            'display_name' => 'required|max:255',
            'type' => 'required|max:255',
            'group' => 'max:255',
        ]);

        $setting = new Setting();

        $data['order'] = $setting->highestOrderSetting($data->group);

        $setting->create($data->all());

        // forget cache
        SettingFacades::forgetCache();

        Session::flash('success', 'Successfully Create Setting');

        return redirect()->back();
    }

    /**
     * Update the specified resource from settings table.
     *
     * @return \Illuminate\Http\RedirectResponse|mixed
     */
    public function update(Request $request)
    {
        $setting = new Setting();
        $error = [];
        foreach ($request->data as $id => $value) {
            $setting = $setting->find($id);
            $key = explode('.', $setting->key);
            unset($key[0]);

            $setting->key = implode('_', explode(' ', (Str::lower($setting->group)))).'.'.\implode('_', $key);

            if (array_key_exists('min', $setting->details) && $value < $setting->details['min']) {
                $error[] = $setting->display_name.' must be greater than '.$setting->details['min'];
            } elseif (array_key_exists('max', $setting->details) && $value > $setting->details['max']) {
                $error[] = $setting->display_name.' must be less than '.$setting->details['max'];
            } elseif (array_key_exists('minlength', $setting->details) && strlen($value) < $setting->details['minlength']) {
                $error[] = $setting->display_name.' must be greater than '.$setting->details['minlength'].' characters';
            } elseif (array_key_exists('maxlength', $setting->details) && strlen($value) > $setting->details['maxlength']) {
                $error[] = $setting->display_name.' must be less than '.$setting->details['maxlength'].' characters';
            } else {
                $this->updateSave($setting, $request, $id, $value);
            }
        }
        // forget cache
        SettingFacades::forgetCache();
        Session::flash('error', $error);
        Session::flash('success', 'Setting Successfully Saved');

        return \redirect()->back();
    }

    private function updateSave($setting, $request, $id, $value)
    {
        if ($request->hasFile('data.'.$id)) {
            $value = Storage::putFile('setting', $request->file('data.'.$id));
        }

        $setting->value = $value;
        $setting->save();
    }

    /**
     * Delete the specified Setting from Settings table.
     *
     * @return \Illuminate\Http\RedirectResponse|mixed
     */
    public function destroy(Setting $setting)
    {
        $setting->delete();

        // forget cache
        SettingFacades::forgetCache();

        Session::flash('success', 'Setting Successfully Deleted');

        return \redirect()->back();
    }

    /**
     * Order the specified Setting from Settings table.
     *
     * @return \Illuminate\Http\RedirectResponse|mixed
     */
    public function move_up(Setting $setting)
    {
        $swapOrder = $setting->order;
        $previousSetting = Setting::where('order', '<', $swapOrder)
            ->where('group', $setting->group)
            ->orderBy('order', 'DESC')->first();

        if (isset($previousSetting->order)) {
            $setting->order = $previousSetting->order;
            $setting->save();
            $previousSetting->order = $swapOrder;
            $previousSetting->save();

            // forget cache
            SettingFacades::forgetCache();

            Session::flash('success', $setting->display_name.' Successfully moved up');
        } else {
            Session::flash('error', $setting->display_name.' Already at top');
        }

        request()->session()->flash('setting_tab', $setting->group);

        return \redirect()->back();
    }

    /**
     * Order the specified Setting from Settings table.
     *
     * @return \Illuminate\Http\RedirectResponse|mixed
     */
    public function move_down(Setting $setting)
    {
        $swapOrder = $setting->order;

        $previousSetting = Setting::where('order', '>', $swapOrder)
            ->where('group', $setting->group)
            ->orderBy('order', 'ASC')->first();

        if (isset($previousSetting->order)) {
            $setting->order = $previousSetting->order;
            $setting->save();
            $previousSetting->order = $swapOrder;
            $previousSetting->save();

            // forget cache
            SettingFacades::forgetCache();

            Session::flash('success', $setting->display_name.' Moved order down');
        } else {
            Session::flash('error', $setting->display_name.' Already at bottom');
        }
        request()->session()->flash('setting_tab', $setting->group);

        return \redirect()->back();
    }

    /**
     * Unset value.
     *
     * @return \Illuminate\Http\RedirectResponse|mixed
     */
    public function unsetValue(Setting $setting)
    {
        Storage::delete($setting->value);
        $setting->value = \null;
        $setting->save();

        // forget cache
        SettingFacades::forgetCache();

        return \redirect()->back();
    }

    /**
     * Upload file.
     *
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function uploadFile(Request $request)
    {
        $file = \upload_file($request, 'file', 'media');

        return \response(['location' => \storage_asset($file)], 200);
    }
}
