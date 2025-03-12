<?php

use Illuminate\Support\Facades\Route;
use Modules\Language\Http\Controllers\BuildLocalController;
use Modules\Language\Http\Controllers\LanguageController;
use Modules\Language\Http\Controllers\LocalizeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('admin/language')->as('admin.language.')->group(function () {
    Route::resource('/', LanguageController::class)->except(['show'])->parameters(['' => 'language']);
    Route::prefix('/{language}/build')->as('build.')->group(function () {
        Route::get('/', [BuildLocalController::class, 'index'])->name('index');
        Route::get('/translatable', [BuildLocalController::class, 'translatable'])->name('translatable');
        Route::post('/translatable', [BuildLocalController::class, 'translate']);
        Route::post('/store', [BuildLocalController::class, 'store'])->name('store');
        Route::get('/data-table-ajax', [BuildLocalController::class, 'dataTableAjax'])->name('data-table-ajax');
        Route::post('/data-table-ajax', [BuildLocalController::class, 'dataTableAjaxUpdate']);
        Route::delete('/data-table-ajax', [BuildLocalController::class, 'dataTableAjaxDestroy']);
    });
});

Route::get('/change-local', [LocalizeController::class, 'changeLocal'])->name('local.change');
Route::get('/get-localize', [LocalizeController::class, 'index'])->name('local.get-localize');
Route::post('/get-localize', [LocalizeController::class, 'store']);
