from django.urls import path
from . import views

urlpatterns = [
    path('api/doctor/', views.Doctor_list.as_view()),
    path('api/loadData', views.load_data, name='load_data')
]