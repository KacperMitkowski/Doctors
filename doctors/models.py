from django.db import models


# Create your models here.
class Doctor(models.Model):
    partner_id = models.CharField(max_length=100, null=True, blank=True)
    practice_id = models.CharField(max_length=100, null=True, blank=True)
    book_number = models.CharField(max_length=30, null=True, blank=True)
    practice_type = models.CharField(max_length=100, null=True, blank=True)
    practice_description = models.CharField(max_length=100, null=True, blank=True)
    registration_record_number = models.CharField(max_length=100, null=True, blank=True)
    medical_licence_number = models.CharField(max_length=100, null=True, blank=True)
    economic_record_number = models.CharField(max_length=100, null=True, blank=True)
    first_name = models.CharField(max_length=100, null=True, blank=True)
    middle_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100, null=True, blank=True)
    medicine_branch = models.CharField(max_length=100, null=True, blank=True)
    vat_number = models.CharField(max_length=100, null=True, blank=True)
    specialisation = models.CharField(max_length=100, null=True, blank=True)
    medicine_activity_start_date = models.DateTimeField('Data rozpoczęcia działalności', null=True, blank=True)
    medicine_activity_start_date_article_104 = models.DateTimeField('Data rozpoczęcia działalności art. 104', null=True, blank=True)
    medicine_activity_end_date = models.DateTimeField('Data zakończenia działalności', null=True, blank=True)
    create_date = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name} (specjalizacja: {self.specialisation if self.specialisation is not None else "brak"}, numer PWZ: {self.medical_licence_number} )'

class Address(models.Model):
    address_id = models.CharField(max_length=100, null=True, blank=True)
    book_number = models.CharField(max_length=100, null=True, blank=True)
    practice_type = models.CharField(max_length=100, null=True, blank=True)
    partner_id = models.CharField(max_length=100, null=True, blank=True)
    medical_institution_name = models.CharField(max_length=1000, null=True, blank=True)
    regon = models.CharField(max_length=100, null=True, blank=True)
    address_type = models.CharField(max_length=100, null=True, blank=True)
    medical_documentation_address_when_call = models.CharField(max_length=1000, null=True, blank=True)
    practice_code = models.CharField(max_length=100, null=True, blank=True)
    practice_description = models.CharField(max_length=1000, null=True, blank=True)
    teryt = models.CharField(max_length=100, null=True, blank=True)
    teryt_description = models.CharField(max_length=100, null=True, blank=True)
    street = models.CharField(max_length=1000, null=True, blank=True)
    street_number = models.CharField(max_length=100, null=True, blank=True)
    local_number = models.CharField(max_length=100, null=True, blank=True)
    zip_code = models.CharField(max_length=100, null=True, blank=True)
    post_office = models.CharField(max_length=100, null=True, blank=True)
    simc_code = models.CharField(max_length=100, null=True, blank=True)
    street_code = models.CharField(max_length=100, null=True, blank=True)
    city = models.CharField(max_length=1000, null=True, blank=True)
    phone = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return f'Nazwa zakładu: {self.medical_institution_name}, Ulica: {self.street}, Nr ulicy: {self.street_number}, Nr lokalu: {self.local_number}, Kod pocztowy: {self.zip_code}, Miasto: {self.phone}'