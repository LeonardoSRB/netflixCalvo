from rest_framework import serializers
from .models import Filmes, Genero, Classif #Imagem, 

class FilmesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Filmes
        fields = ['id', 'titulo', 'genre', 'ano', 'idioma', 'classif']

class GeneroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genero
        fields = ['id', 'genre']

class ClassifSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classif
        fields = ['id', 'classif']

#lass ImagemSerializer(serializers.ModelSerializer):
 #   class Meta:
  #      model: Imagem        
   #     fields = ['id', 'imagem']