<?php

use Illuminate\Support\Facades\Route;
use Modules\User\Http\Controllers\UserController;

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

Route::prefix('admin/user')->as('admin.user.')->group(function () {
    Route::resource('/', UserController::class)->except(['show'])->parameter('', 'user');
    Route::post('{user}/status-update', [UserController::class, 'statusUpdate'])->name('status-update');
});
