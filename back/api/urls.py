from django.urls import path
from . import views

urlpatterns = [
    path('filmes', views.listar_filmes),
    path('listarfilmes', views.FilmesViews.as_view())
]