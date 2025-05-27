from django.db import models

class MenuItem(models.Model):
    jour = models.CharField(max_length=20) 
    nom = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    prix = models.DecimalField(max_digits=6, decimal_places=2)
    type_menu = models.CharField(max_length=20)  # 'déjeuner' ou 'dîner'
          # lundi, mardi, etc.

    def __str__(self):
        return f"{self.jour} - {self.nom}   ({self.type_menu})"



