# Generated by Django 5.0 on 2023-12-30 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('labexp', '0006_musician_currency'),
    ]

    operations = [
        migrations.AddField(
            model_name='musician',
            name='audio',
            field=models.CharField(blank=True, choices=[('Audio', [('vinyl', 'Vinyl'), ('cd', 'CD')]), ('Video', [('vhs', 'VHS Tape'), ('dvd', 'DVD')]), ('unknown', 'Unknown')], max_length=255),
        ),
        migrations.AlterField(
            model_name='musician',
            name='currency',
            field=models.CharField(blank=True, choices=[('FR', 'Freshman'), ('SO', 'Sophomore'), ('JR', 'Junior'), ('SR', 'Senior'), ('GR', 'Graduate')], max_length=255),
        ),
    ]