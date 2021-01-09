# Generated by Django 3.1.5 on 2021-01-06 11:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doctors', '0002_auto_20210106_1136'),
    ]

    operations = [
        migrations.AddField(
            model_name='doctor',
            name='specialisation',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='doctor',
            name='vat_number',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
