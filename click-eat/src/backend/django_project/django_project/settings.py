from pathlib import Path
import os

# --- BASE CONFIGURATION ---
BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = 'django-insecure-your-secret-key-goes-here'
DEBUG = True
ALLOWED_HOSTS = ['*']

# --- INSTALLED APPS ---
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Tiers
    'rest_framework',
    'corsheaders',
    'mozilla_django_oidc',

    # App locale
    'food_delivery',
]

# --- MIDDLEWARE ---
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'mozilla_django_oidc.middleware.SessionRefresh',
]

# --- URL CONF ---
ROOT_URLCONF = 'django_project.urls'

# --- TEMPLATES ---
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'django_project.wsgi.application'

# --- DATABASE ---
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# --- PASSWORD VALIDATION ---
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# --- INTERNATIONALIZATION ---
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# --- STATIC FILES ---
STATIC_URL = 'static/'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# --- CORS HEADERS ---
CORS_ALLOW_ALL_ORIGINS = True

# --- AUTHENTICATION BACKENDS ---
AUTHENTICATION_BACKENDS = (
    'mozilla_django_oidc.auth.OIDCAuthenticationBackend',
    'django.contrib.auth.backends.ModelBackend',
)

# --- OIDC / Keycloak CONFIGURATION ---
OIDC_RP_CLIENT_ID = 'click-eat-api'
OIDC_RP_CLIENT_SECRET = 'XSQ1ZfwE4J4FLkCLGnniwIHtoPOpdkJq'

OIDC_OP_AUTHORIZATION_ENDPOINT = 'http://localhost:8080/realms/saturne/protocol/openid-connect/auth'
OIDC_OP_TOKEN_ENDPOINT = 'http://localhost:8080/realms/saturne/protocol/openid-connect/token'
OIDC_OP_USER_ENDPOINT = 'http://localhost:8080/realms/saturne/protocol/openid-connect/userinfo'
OIDC_OP_JWKS_ENDPOINT = 'http://localhost:8080/realms/saturne/protocol/openid-connect/certs'

# --- LOGIN / LOGOUT REDIRECTS ---
LOGIN_REDIRECT_URL = '/'
LOGOUT_REDIRECT_URL = '/'

# --- DRF CONFIG ---
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'mozilla_django_oidc.contrib.drf.OIDCAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ),
}
