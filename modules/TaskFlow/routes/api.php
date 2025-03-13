<?php

use Illuminate\Support\Facades\Route;
use Modules\TaskFlow\Http\Controllers\Api\ProjectController;
use Modules\TaskFlow\Http\Controllers\Api\TaskController;

/*
 *--------------------------------------------------------------------------
 * API Routes
 *--------------------------------------------------------------------------
 *
 * Here is where you can register API routes for your application. These
 * routes are loaded by the RouteServiceProvider within a group which
 * is assigned the "api" middleware group. Enjoy building your API!
 *
*/

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::prefix('admin')->as('admin.')->group(function () {
        Route::prefix('project')->as('project.')->group(function () {
            Route::post('status-update/{project}', [ProjectController::class, 'statusUpdate'])->name('status-update');
            Route::apiResource('', ProjectController::class)->parameters(['' => 'project']);
        });
        Route::prefix('task')->as('task.')->group(function () {
            Route::apiResource('', TaskController::class)->parameters(['' => 'task']);
        });
    });
});
