from django.urls import path
from . import views

urlpatterns = [
    path('api/doctor/', views.Doctor_list.as_view()),
]