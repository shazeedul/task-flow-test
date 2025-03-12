<?php

use Illuminate\Support\Facades\Route;
use Modules\TaskFlow\Http\Controllers\ProjectController;
use Modules\TaskFlow\Http\Controllers\TaskController;

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

Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {
    Route::prefix('project')->name('project.')->group(function () {
        Route::resource('', ProjectController::class)->parameters(['' => 'project']);
        Route::post('status-update/{id}', [ProjectController::class, 'statusUpdate'])->name('status-update');
    });
    Route::prefix('task')->name('task.')->group(function () {
        Route::post('status-update/{id}', [TaskController::class, 'statusUpdate'])->name('status-update');
        Route::get('get-projects', [TaskController::class, 'getProjects'])->name('get-projects');
        Route::get('get-users', [TaskController::class, 'getUsers'])->name('get-users');
        Route::resource('', TaskController::class)->parameters(['' => 'task']);
    });
});
