from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from jose import jwt
import requests

KEYCLOAK_PUBLIC_KEY = """
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvnQ...
-----END PUBLIC KEY-----
"""  # Remplace ceci par la vraie clé publique du realm

ALGORITHMS = ['RS256']
KEYCLOAK_ISSUER = "http://localhost:8080/realms/mon-realm"  # Adapté à ton Keycloak

class KeycloakJWTAuthentication(BaseAuthentication):
    def authenticate(self, request):
        auth_header = request.headers.get('Authorization')

        if not auth_header or not auth_header.startswith("Bearer "):
            return None

        token = auth_header.split(" ")[1]
        try:
            payload = jwt.decode(token, KEYCLOAK_PUBLIC_KEY, algorithms=ALGORITHMS, issuer=KEYCLOAK_ISSUER)
            return (payload, None)  # Tu peux aussi créer un User custom ici
        except Exception as e:
            raise AuthenticationFailed(f"Token invalide : {str(e)}")
