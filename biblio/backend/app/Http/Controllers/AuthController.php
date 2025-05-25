<?php

namespace App\Http\Controllers;

use App\Services\KeycloakService;

class AuthController extends Controller
{
    protected $keycloak;

    public function __construct(KeycloakService $keycloak)
    {
        $this->keycloak = $keycloak;
    }

    public function getTokenFromKeycloak()
    {
        try {
            $token = $this->keycloak->getAccessToken();
            return response()->json(['access_token' => $token]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
