<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/db-test', function () {
    try {
        \DB::connection()->getPdo();
        return "✅ 資料庫連線成功！";
    } catch (\Exception $e) {
        return "❌ 錯誤：" . $e->getMessage();
    }
});

Route::get('/users', [UserController::class, 'search']);
