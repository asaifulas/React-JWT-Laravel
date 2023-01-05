<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DevicesController;
use App\Http\Controllers\GatewaysController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('v1/push', [GatewaysController::class, 'store']);
Route::post('login', [AuthController::class, 'login']);
Route::group(['middleware'=>'api'], function(){
    Route::resource('v1/push', GatewaysController::class)->except(['create', 'store', 'edit']);
    Route::resource('devices', DevicesController::class);
    Route::post('devices/variable', [DevicesController::class, 'addvariable']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
});

