<?php

namespace Modules\Setting\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Setting\Models\Setting;
use Modules\Setting\Transformers\SettingResource;

class SettingApiController extends Controller
{
    /**
     * System Information
     *
     * @return mixed
     */
    public function systemInfo(Request $request)
    {
        $setting = Setting::where('group', 'chat')->whereIn('key', [
            'chat.notification_sound',
            'chat.primary_color',
            'chat.secondary_color',
            'chat.position',
            'chat.chat_icon',
        ])->get();

        $settings = SettingResource::collection($setting);

        return response()->success($settings, localize('System Information'));
    }
}
