<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/keycloak-token', [AuthController::class, 'getTokenFromKeycloak']);
Route::middleware('auth:api')->get('/cours', function () {
    return response()->json([
        'message' => 'Bienvenue sur Cosmos X Docs API !',
        'utilisateur' => auth()->user(),
    ]);
});

Route::get('/cours', function () {
return response()->json(['ok' => true]);
});
