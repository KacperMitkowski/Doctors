from django.urls import path
from . import views

urlpatterns = [
    path('doctor/<int:page_nr>/', views.Doctor_list_page, name='doctor_list_page'),
    path('api/load_doctors_to_db_from_csv', views.load_doctors_to_db_from_csv, name='load_data')
]
