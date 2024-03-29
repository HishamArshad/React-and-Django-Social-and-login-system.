# Generated by Django 5.0 on 2023-12-30 10:02

import django.utils.timezone
import model_utils.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('labexp', '0003_rename_status_article_another_field'),
    ]

    operations = [
        migrations.RenameField(
            model_name='article',
            old_name='another_field',
            new_name='status',
        ),
        migrations.AddField(
            model_name='article',
            name='published_at',
            field=model_utils.fields.MonitorField(default=django.utils.timezone.now, monitor='status', when={'published'}),
        ),
    ]
