import csv
import re
import pandas as pd
from datetime import datetime

from django.shortcuts import render

# Create your views here.
from .models import Doctor
from .serializers import Doctor_serializer
from rest_framework import generics



class Doctor_list(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = Doctor_serializer


def load_data(request):
    with open("wspolnicy.csv", encoding='utf-8') as file:
        reader = csv.reader(file, delimiter = ";")
        headers = next(reader)
        for row in reader:
            if not Doctor.objects.filter(partner_id=row[0]).exists():
                Doctor.objects.get_or_create(partner_id=None if "NULL" in row[0] else row[0],
                                             practice_id=None if "NULL" in row[1] else row[1],
                                             book_number=None if "NULL" in row[2] else row[2],
                                             practice_type=None if "NULL" in row[3] else row[3],
                                             practice_description=None if "NULL" in row[4] else row[4],
                                             registration_record_number=None if "NULL" in row[5] else row[5],
                                             medical_licence_number=None if "NULL" in row[6] else row[6],
                                             economic_record_number=None if "NULL" in row[7] else row[7],
                                             first_name=None if "NULL" in row[8] else row[8],
                                             middle_name=None if "NULL" in row[9] else row[9],
                                             last_name=None if "NULL" in row[10] else row[10],
                                             medicine_branch=None if "NULL" in row[11] else row[11],
                                             vat_number=None if "NULL" in row[12] else row[12],
                                             specialisation=None if "NULL" in row[13] else row[13],
                                             medicine_activity_start_date=None if "NULL" in row[14] else datetime.strptime(row[14], '%Y-%m-%d').date(),
                                             medicine_activity_start_date_article_104=None if "NULL" in row[15] else datetime.strptime(row[15], '%Y-%m-%d').date(),
                                             medicine_activity_end_date=None if "NULL" in row[16] else datetime.strptime(row[16], '%Y-%m-%d').date(),
                                             create_date=datetime.now()
                                             )


    """
    df = pd.read_csv('wspolnicy.csv', sep=';')
    row_iter = df.iterrows()
    objs = [
        Doctor(
            partner_id=None if "NULL" in row['Id wspólnika'] else row['Id wspólnika'],
            practice_id=None if "NULL" in row['Id praktyki'] else row['Id praktyki'],
            book_number=None if "NULL" in row['Numer ksiegi'] else row['Numer ksiegi'],
            practice_type=None if "NULL" in row['Typ praktyki'] else row['Typ praktyki'],
            practice_description=None if "NULL" in row['Zawód opis'] else row['Zawód opis'],
            registration_record_number=None if "NULL" in row['Numer wpisu do rej. zawodowego'] else row['Numer wpisu do rej. zawodowego'],
            medical_licence_number=None if "NULL" in row['Numer prawa wykonywania zawodu'] else row['Numer prawa wykonywania zawodu'],
            economic_record_number=None if "NULL" in row['Numer wpisu do ewidencji gospodarczej'] else row['Numer wpisu do ewidencji gospodarczej'],
            first_name=None if "NULL" in row['Imie'] else row['Imie'],
            middle_name=None if "NULL" in row['Drugie imie'] else row['Drugie imie'],
            last_name=None if "NULL" in row['Nazwisko'] else row['Nazwisko'],
            medicine_branch=None if "NULL" in row['Dziedzina medycyny'] else row['Dziedzina medycyny'],
            vat_number=None if "NULL" in row['Nip'] else row['Nip'],
            specialisation=None if "NULL" in row['Specjalizacja'] else row['Specjalizacja'],
            medicine_activity_start_date=None if "NULL" in row['Data rozp. dzialalnosci'] else datetime.strptime(row['Data rozp. dzialalnosci'], '%Y-%m-%d').date(),
            medicine_activity_start_date_article_104=None if "NULL" in row['Data rozp. dzialalnosci art. 104'] else datetime.strptime(row['Data rozp. dzialalnosci art. 104'],                                                                                     '%Y-%m-%d').date(),
            medicine_activity_end_date=None if "NULL" in row['Data zak. dzialalnosci'] else datetime.strptime(row['Data zak. dzialalnosci'], '%Y-%m-%d').date(),
            create_date=datetime.now()
        )

        for index, row in row_iter
    ]
    Doctor.objects.bulk_create(objs)

    """


    return render(request, 'Kacper_Mitkowski_Rejestr_podmiotów_lekarskich/index.html')