from django.urls import path, include
from rest_framework.routers import DefaultRouter
from tickets import views
from .views import MenuItemViewSet

router = DefaultRouter()
router.register(r'menus', MenuItemViewSet, basename='menu')

urlpatterns = [
    path('', include(router.urls)),
    
]
