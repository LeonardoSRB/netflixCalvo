from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from django.shortcuts import render
from .models import Filmes
from .serializer import FilmesSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET', 'POST'])
def listar_filmes(request):
    if request.method == 'GET':
        queryset = Filmes.objects.all()
        serializer = FilmesSerializer(queryset, many=True)
    return Response(serializer.data)

class FilmesViews(ListCreateAPIView):
    queryset = Filmes.objects.all()
    serializer_class = FilmesSerializer

