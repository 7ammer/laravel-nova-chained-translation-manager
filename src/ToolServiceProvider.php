<?php

namespace Statikbe\NovaTranslationManager;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Statikbe\NovaTranslationManager\Http\Middleware\Authorize;

class ToolServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //This can be overwritten by any service provider
        TranslationManager::setLocales(config('app.supported_locales', ['en']));

        $this->loadViewsFrom(__DIR__.'/../resources/views', 'translation-manager');

        $this->app->booted(function () {
            $this->routes();
        });

        Nova::serving(function (ServingNova $event) {
            //
        });
    }

    /**
     * Register the tool's routes.
     *
     * @return void
     */
    protected function routes()
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware(['nova', Authorize::class])
                ->namespace(__NAMESPACE__ . '\\Http\\Controllers')
                ->prefix('nova-vendor/translation-manager')
                ->group(__DIR__.'/../routes/api.php');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->publishes([
            __DIR__ . '/../config/nova-chained-translation-manager.php' => config_path('nova-chained-translation-manager.php'),
        ], 'nova-chained-translation-manager');
    }
}
