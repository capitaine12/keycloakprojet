"""
URL configuration for django_project project.
"""

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('food_delivery.urls')),
    path('oidc/', include('mozilla_django_oidc.urls')),
    path('accounts/', include('allauth.urls')),

]


