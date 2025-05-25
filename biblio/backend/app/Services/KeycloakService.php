<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class KeycloakService
{
    public function getAccessToken()
    {
        $response = Http::asForm()->post(env('KEYCLOAK_URL') . '/realms/' . env('KEYCLOAK_REALM') . '/protocol/openid-connect/token', [
            'client_id' => env('KEYCLOAK_CLIENT_ID'),
            'client_secret' => env('KEYCLOAK_CLIENT_SECRET'),
            'grant_type' => 'client_credentials'
        ]);

        if ($response->successful()) {
            return $response->json()['access_token'];
        } else {
            throw new \Exception('Impossible d\'obtenir un token');
        }
    }
}
