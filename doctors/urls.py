from django.urls import path
from . import views

urlpatterns = [
    path('doctor/<int:page_nr>/', views.Doctor_list_page, name='doctor_list_page'),
    path('api/loadData', views.load_data, name='load_data')
]
