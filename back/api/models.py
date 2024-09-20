from typing import Any
from django.db import models
    
class Genero(models.Model):
    genre = models.CharField(max_length=255)

class Classif(models.Model):
    classif = models.CharField(max_length=255)    

class Filmes(models.Model):
    titulo = models.CharField(max_length=255)
    genre = models.ForeignKey(Genero, on_delete=models.CASCADE )
    ano = models.CharField(max_length=255)
    idioma = models.CharField(max_length=255)
    classif = models.ForeignKey(Classif, on_delete=models.CASCADE)
    # urlImage = models.CharField(max_length=255)

class Imagem(models.Model):
    imagem = models.ImageField(upload_to='capas/', blank=True, null=True)    