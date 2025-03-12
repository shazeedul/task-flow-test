<?php

use Illuminate\Support\Facades\Route;
use Modules\Setting\Http\Controllers\Api\SettingApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::prefix('v1')->as('api.v1.')->group(function () {
    Route::get('system-info', [SettingApiController::class, 'systemInfo'])->name('systemInfo');
});
