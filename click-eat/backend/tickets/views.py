from rest_framework import viewsets
from .models import MenuItem
from .serializers import MenuItemSerializer

class MenuItemViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        jour = self.request.query_params.get('jour')
        type_menu = self.request.query_params.get('type_menu')

        if type_menu:
            queryset = queryset.filter(type_menu__iexact=type_menu)
        if jour:
            queryset = queryset.filter(jour__iexact=jour)

        return queryset
