<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\AuthController;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Client\Response;
use App\Models\Test;
use App\Http\Controllers\KeyStatisticsController;
use Illuminate\Support\Facades\Http;




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

// Auth Routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login' ,[AuthController::class , 'login'] );
Route::get('/logout' , [AuthController::class, 'logout']);


$responseData = '';
Route::get('/test', function(Request $request){
    $response = Http::get('https://public-api.quickfs.net/v1/data/all-data/FB:US?api_key=4ed0f30c148834139f4bb3c4421341690f3d3c07');
    $response->json();
    $responseData = $response->json();
    dd($responseData);
});


// Crud For Key Statistics
Route::post('/keyStatistics', [KeyStatisticsController::class , 'create']);
Route::get('/keyStatistics', [KeyStatisticsController::class , 'index']);
Route::get('/keyStatistics/{key}', [KeyStatisticsController::class , 'show']);
