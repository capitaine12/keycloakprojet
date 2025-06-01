"""
Django settings for django_project project.
"""

from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-your-secret-key-goes-here'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']

# Application definition

""" INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'food_delivery',
    'mozilla_django_oidc',
] """

INSTALLED_APPS = [
    # ...
    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.openid_connect',
    # ...
]

SITE_ID = 1



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

ROOT_URLCONF = 'django_project.urls'

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

# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

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

# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# CORS settings
CORS_ALLOW_ALL_ORIGINS = True

# REST Framework settings
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'mozilla_django_oidc.contrib.drf.OIDCAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ),
}

# Keycloak settings
""" OIDC_RP_CLIENT_ID = 'click-eat'
OIDC_RP_CLIENT_SECRET = 'P4UwgG88x4RYLr08j3a3ABv6EFiECZ2X'
OIDC_OP_AUTHORIZATION_ENDPOINT = 'http://localhost:8080/realms/saturne/protocol/openid-connect/auth'
OIDC_OP_TOKEN_ENDPOINT = 'http://localhost:8080/auth/realms/saturne/protocol/openid-connect/token'
OIDC_OP_USER_ENDPOINT = 'http://localhost:8080/auth/realms/saturne/protocol/openid-connect/userinfo'
OIDC_OP_JWKS_ENDPOINT = 'http://localhost:8080/auth/realms/saturne/protocol/openid-connect/certs'
 """

SOCIALACCOUNT_PROVIDERS = {
    'openid_connect': {
        'SERVERS': {
            'keycloak': {
                'CLAIMS_ENDPOINT': 'http://localhost:8080/realms/saturne/protocol/openid-connect/userinfo',
                'TOKEN_ENDPOINT': 'http://localhost:8080/realms/saturne/protocol/openid-connect/token',
                'AUTHORIZATION_ENDPOINT': 'http://localhost:8080/realms/saturne/protocol/openid-connect/auth',
                'END_SESSION_ENDPOINT': 'http://localhost:8080/realms/saturne/protocol/openid-connect/logout',
                'ISSUER': 'http://localhost:8080/realms/saturne',
                'CLIENT_ID': 'click-eat-id',
                'CLIENT_SECRET': 'P4UwgG88x4RYLr08j3a3ABv6EFiECZ2X',
                'SCOPE': ['openid', 'profile', 'email'],
            }
        }
    }
}


# Authentication backend
""" AUTHENTICATION_BACKENDS = (
    'mozilla_django_oidc.auth.OIDCAuthenticationBackend',
    'django.contrib.auth.backends.ModelBackend',
) """

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend',
)
