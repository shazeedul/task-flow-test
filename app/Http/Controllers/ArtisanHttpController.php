<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Artisan;

class ArtisanHttpController extends Controller
{
    /**
     * Instantiate a new UserController instance.
     */
    public function down()
    {
        Artisan::call('down');

        return $artisan = Artisan::output();
    }

    public function dbSeed()
    {
        Artisan::call('db:seed');

        return $artisan = Artisan::output();
    }

    public function keyGenerate()
    {
        Artisan::call('key:generate');

        return $artisan = Artisan::output();
    }

    public function migrateFresh()
    {
        Artisan::call('migrate:fresh');

        return $artisan = Artisan::output();
    }

    public function migrateInstall()
    {
        Artisan::call('migrate:install');

        return $artisan = Artisan::output();
    }

    public function migrateRefresh()
    {

        Artisan::call('migrate:refresh');

        return $artisan = Artisan::output();
    }

    public function migrateReset()
    {
        Artisan::call('migrate:reset');

        return $artisan = Artisan::output();
    }

    public function migrateRollBack()
    {
        Artisan::call('migrate:rollback');

        return $artisan = Artisan::output();
    }

    public function optimizeClear()
    {
        Artisan::call('optimize:clear');

        return $artisan = Artisan::output();
    }

    public function optimize()
    {
        Artisan::call('optimize');

        return $artisan = Artisan::output();
    }

    public function routeClear()
    {
        Artisan::call('route:clear');

        return $artisan = Artisan::output();
    }

    public function storageLink()
    {
        $files = config('filesystems.links');
        foreach ($files as $symbolic => $source) {
            //   delete if exists
            if (file_exists($symbolic)) {
                unlink($symbolic);
            }
        }
        Artisan::call('storage:link');

        return \response()->success(Artisan::output(), 'Storage link created successfully');
    }

    public function viewClear()
    {
        Artisan::call('view:clear');

        return $artisan = Artisan::output();
    }

    public function configClear()
    {
        Artisan::call('config:clear');

        return $artisan = Artisan::output();
    }

    public function configCache()
    {
        Artisan::call('config:cache');

        return $artisan = Artisan::output();
    }

    public function routeCache()
    {
        Artisan::call('route:cache');

        return $artisan = Artisan::output();
    }

    public function viewCache()
    {
        Artisan::call('view:cache');

        return $artisan = Artisan::output();
    }
}
