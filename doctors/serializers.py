from rest_framework import serializers
from .models import Doctor, Address


class Doctor_serializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = (
                  'partner_id',
                  'practice_id',
                  'book_number',
                  'practice_type',
                  'practice_description',
                  'registration_record_number',
                  'medical_licence_number',
                  'economic_record_number',
                  'first_name',
                  'middle_name',
                  'last_name',
                  'medicine_branch',
                  'medicine_activity_start_date',
                  'medicine_activity_start_date_article_104',
                  'medicine_activity_end_date',
                  'create_date'
                  )
class Address_serializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = (
            'address_id',
            'book_number',
            'practice_type',
            'partner_id',
            'medical_institution_name',
            'regon',
            'address_type',
            'medical_documentation_address_when_call',
            'practice_code',
            'practice_description',
            'teryt',
            'teryt_description',
            'street',
            'street_number',
            'local_number',
            'zip_code',
            'post_office',
            'simc_code',
            'street_code',
            'city',
            'phone'
            )