<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::get('/users', [UserController::class, 'search']);

Route::post('/users', [UserController::class, 'create']);

Route::put('/users/{sn}', [UserController::class, 'update']);

Route::delete('/users/{sn}', [UserController::class, 'delete']);