<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"
      dir="{{ __('jasmine::vars.dir') === 'rtl' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@hasSection('title') @yield('title') | @endif{{ config('app.name', 'Laravel') }}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            border: 0;
            box-sizing: border-box;
            font-family: inherit;
            line-height: 1.5;
            color: inherit;
        }

        input:-webkit-autofill {
            -webkit-background-clip: text;
            -webkit-text-fill-color: #fff;
        }

        body {
            font-family: 'Assistant', sans-serif;
            background: linear-gradient(8deg, #2476ff, #86b3ff);
            color: #fff;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-weight: 300;
            letter-spacing: 0.05em;
        }

        .wrapper {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        a {
            color: #fff;
        }

        .alert {
            text-align: center;
            margin-bottom: 1rem;
        }

        .alert.alert-success {
            color: lime;
        }

        h1 {
            text-align: center;
            font-weight: 100;
            margin-bottom: 1.5rem;
            font-size: 1.75rem;
            letter-spacing: 0.25ch;
            text-transform: uppercase;

        }

        .box {
            max-width: 90%;
            width: 400px;
            background-color: #474747;
            margin-top: 1.5rem;
            padding: 1rem 1.5rem;
            box-shadow: 0 0 10px #474747;
        }

        .f-group {
            margin-bottom: 1rem;
        }

        .f-group label {
            display: block;
            margin-bottom: 0.25rem;
        }

        .f-group input {
            display: block;
            width: 100%;
            padding: 0.5rem 0;
            border-radius: 0;
            background-color: transparent;
            border-bottom: 1px solid #8e8e8e;
        }

        .f-group input:focus {
            outline: none;
            border-bottom: 1px solid #fff;
        }

        .f-group input[type=checkbox] {
            display: inline-block;
            width: initial;
        }

        .f-group input[type=checkbox] + label {
            display: inline-block;
        }

        .f-group [role="alert"] {
            color: #ff0b0b;
        }

        button {
            cursor: pointer;
            border: 1px solid #fff;
            background: transparent;
            padding: 0.5rem 1.5rem;
            text-transform: uppercase;
            font-weight: 400;
            letter-spacing: 0.25ch;
            transition: all .25s ease-in-out;
        }

        button:hover,
        button:focus {
            color: #000;
            background: #fff;
        }
    </style>
    @stack('head')
</head>
<body>
<div class="wrapper">
    <div style="font-size: 4rem; font-weight: 200;">Jasmine</div>

    <div class="box">
        <h1>@yield('title')</h1>
        @yield('content')
    </div>

    <div style="text-align: center; margin-top: 1rem;">
        <a href="{{ request()->fullUrlWithQuery(['locale' => 'he']) }}">עברית</a>
        <span>&nbsp;|&nbsp;</span>
        <a href="{{ request()->fullUrlWithQuery(['locale' => 'en']) }}">English</a>
    </div>
</div>

@stack('body-end')
</body>
</html>

