<?php
/** @var callable|null $group */

/** @var callable|null $authedGroup */

use Jasmine\Jasmine\Http\Controllers\Auth\ForgotPasswordController as ForgotPassword;
use Jasmine\Jasmine\Http\Controllers\Auth\LoginController as Login;
use Jasmine\Jasmine\Http\Controllers\Auth\ResetPasswordController as ResetPassword;
use Jasmine\Jasmine\Http\Controllers\BreadController as Bread;
use Jasmine\Jasmine\Http\Controllers\BreadRelationshipsController as BreadRelationships;
use Jasmine\Jasmine\Http\Controllers\DashboardController as Dashboard;
use Jasmine\Jasmine\Http\Controllers\FileManagerController as FileManager;
use Jasmine\Jasmine\Http\Controllers\LocaleController as Locale;
use Jasmine\Jasmine\Http\Controllers\PageController as Page;
use Jasmine\Jasmine\Http\Controllers\RedirectionController as Redirection;
use Jasmine\Jasmine\Http\Middleware\JasmineLocale;
use Jasmine\Jasmine\Http\Middleware\Robots;

Route::group(
    [
        'middleware' => [
            Robots::class,
            JasmineLocale::class,
        ],
        'as'         => 'jasmine.',
        'name'       => 'jasmine.',
    ],
    function () use ($group, $authedGroup) {
        // Change locale
        Route::get('/locale/{jasmineLocale}', [Locale::class, 'change'])->name('change-locale');

        // Authentication Routes...
        Route::get('login', [Login::class, 'showLoginForm'])->name('login');
        Route::post('login', [Login::class, 'login']);
        Route::post('logout', [Login::class, 'logout'])->name('logout');
        Route::get('password/reset', [ForgotPassword::class, 'showLinkRequestForm'])->name('password.request');
        Route::post('password/reset', [ForgotPassword::class, 'sendResetLinkEmail']);
        Route::get('password/reset/{token}', [ResetPassword::class, 'showResetForm'])->name('password.reset');
        Route::post('password/reset/{token}', [ResetPassword::class, 'reset']);

        // Authenticated routes
        Route::group(
            [
                'middleware' => ['jasmineAuth:' . config('jasmine.auth.guard')],
            ],
            function () use ($authedGroup) {
                Route::get('/', [Dashboard::class, 'show'])->name('dashboard');

                Route::get('/file-manager', [FileManager::class, 'show'])->name('fm.show');
                Route::get('/file-manager-tinymce5', [FileManager::class, 'tinymce5'])
                     ->name('fm.show.tinymce5');

                // Bread routes
                Route::group(
                    [
                        'prefix' => '/bread/{breadableName}',
                        'as'     => 'bread.',
                        'name'   => 'bread.',
                    ],
                    function () {
                        Route::get('', [Bread::class, 'index'])->name('index');
                        Route::get('/export', [Bread::class, 'export'])->name('export');
                        Route::put('/reorder', [Bread::class, 'reorder'])->name('reorder');
                        Route::get('/create', [Bread::class, 'create'])->name('create');
                        Route::post('', [Bread::class, 'store'])->name('store');
                        Route::get('/{breadableId}/edit', [Bread::class, 'edit'])->name('edit');
                        Route::patch('/{breadableId}', [Bread::class, 'update'])->name('update');
                        Route::put('/{breadableId}', [Bread::class, 'update'])->name('update');
                        Route::delete('/{breadableId}', [Bread::class, 'destroy'])->name('destroy');

                        Route::get('/relations', [BreadRelationships::class, 'getRelationData']);

                        Route::get('{breadableId}/relations', [BreadRelationships::class, 'getRelationData']);
                    }
                );

                // Pages routes
                Route::bind('jasminePage', function ($slug) {
                    if (!$page = Jasmine::getPage($slug)) {
                        abort(404);
                    }

                    $page = call_user_func_array("$page::firstOrCreate", [
                        ['name' => $slug],
                        [
                            'url'     => $slug,
                            'content' => [],
                        ],
                    ]);

                    return $page;
                });

                Route::group(
                    [
                        'prefix' => '/page/{jasminePage}',
                        'as'     => 'page.',
                        'name'   => 'page.',
                    ],
                    function () {
                        Route::patch('', [Page::class, 'index'])->name('update');
                        Route::put('', [Page::class, 'update'])->name('update');
                        Route::get('/edit', [Page::class, 'edit'])->name('edit');
                    }
                );

                // Redirection routes
                Route::get('/redirection', [Redirection::class, 'manage'])->name('redirection.index');
                Route::post('/redirection', [Redirection::class, 'save'])->name('redirection.save');
                Route::delete('/redirection', [Redirection::class, 'delete'])->name('redirection.delete');
                Route::get('/redirection/export', [Redirection::class, 'export'])->name('redirection.export');
                Route::post('/redirection/import', [Redirection::class, 'import'])
                     ->name('redirection.import');

                if ($authedGroup) {
                    $authedGroup();
                }
            }
        );

        if ($group) {
            $group();
        }

    }
);
