from django.db import models


# Create your models here.
class Doctor(models.Model):
    partner_id = models.CharField(max_length=100)
    practice_id = models.CharField(max_length=100)
    book_number = models.CharField(max_length=30)
    practice_type = models.CharField(max_length=100)
    practice_description = models.CharField(max_length=100)
    registration_record_number = models.CharField(max_length=100, null=True, blank=True)
    medical_licence_number = models.CharField(max_length=100, null=True, blank=True)
    economic_record_number = models.CharField(max_length=100, null=True, blank=True)
    first_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100)
    medicine_branch = models.CharField(max_length=100, null=True, blank=True)
    medicine_activity_start_date = models.DateTimeField('Data rozpoczęcia działalności', null=True, blank=True)
    medicine_activity_start_date_article_104 = models.DateTimeField('Data rozpoczęcia działalności art. 104', null=True, blank=True)
    medicine_activity_end_date = models.DateTimeField('Data zakończenia działalności', null=True, blank=True)
    create_date = models.DateTimeField(auto_now_add=True)

