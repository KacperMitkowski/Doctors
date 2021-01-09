from django.urls import path
from . import views

urlpatterns = [
    path('api/doctor/', views.Doctor_list.as_view()),
    path('doctor/<int:page_nr>/', views.Doctor_list_page, name='doctor_list_page'),
    path('api/loadData', views.load_data, name='load_data')
]
