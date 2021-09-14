<?php

namespace Jasmine\Jasmine\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Jasmine\Jasmine\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    public function __construct()
    {
        $this->middleware('guest:' . config('jasmine.auth.guard'))->except('logout');
    }

    public function redirectTo() { return route('jasmine.dashboard'); }

    protected function guard() { return Auth::guard(config('jasmine.auth.guard')); }

    public function showLoginForm() { return view('jasmine::auth.login'); }

    protected function loggedOut(Request $request) { return redirect(route('jasmine.login')); }
}
