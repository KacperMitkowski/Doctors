from django.urls import path
from . import views

urlpatterns = [
    path('doctor/<int:page_nr>/', views.doctor_list_page, name='doctor_list_page'),
    path('doctor/details/<str:doctor_id>/', views.doctor_details, name='doctor_details'),
    path('load_doctors_to_db_from_csv', views.load_doctors_to_db_from_csv, name='load_doctors'),
    path('load_doctor_addresses_from_csv', views.load_doctor_addresses_from_csv, name='load_addresses')
]
