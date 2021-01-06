from django.shortcuts import render

# Create your views here.
from .models import Doctor
from .serializers import Doctor_serializer
from rest_framework import generics



class Doctor_list(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = Doctor_serializer
