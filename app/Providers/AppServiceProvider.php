<?php

namespace App\Providers;

use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Laravel\Fortify\Fortify;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->loadHelpers();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        if (config('app.force_https')) {
            $this->app['request']->server->set('HTTPS', true);
            URL::forceScheme('https');
        }

        Fortify::ignoreRoutes();

        Schema::defaultStringLength(120);

        Response::macro('success', function ($data = null, $message = null, $code = 200, $extraData = []) {
            return Response::json(array_merge([
                'success' => true,
                'data' => $data,
                'message' => $message,
            ], $extraData), $code);
        });

        Response::macro('error', function ($data = null, $message = null, $code = 400, $extraData = []) {
            return Response::json(array_merge([
                'success' => false,
                'data' => $data,
                'message' => $message,
            ], $extraData), $code);
        });
    }

    /**
     * Load helpers.
     */
    protected function loadHelpers()
    {
        foreach (glob(__DIR__.'/../Helpers/*.php') as $filename) {
            require_once $filename;
        }
    }
}
