# Generated by Django 5.2.3 on 2025-06-24 19:29

import datetime
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('date', models.DateField()),
                ('time', models.TimeField(default=datetime.time(0, 0))),
                ('place', models.CharField(max_length=255)),
                ('venue', models.CharField(max_length=255)),
                ('registration_close_date', models.DateField(blank=True, null=True)),
                ('registration_close_time', models.TimeField(blank=True, null=True)),
                ('event_mode', models.CharField(choices=[('online', 'Online'), ('offline', 'Offline'), ('hybrid', 'Hybrid')], default='offline', max_length=50)),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to='event_thumbnails/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_active', models.BooleanField(default=True)),
                ('event_type', models.CharField(choices=[('workshop', 'Workshop'), ('seminar', 'Seminar'), ('conference', 'Conference'), ('webinar', 'Webinar'), ('meetup', 'Meetup')], default='workshop', max_length=50)),
                ('max_participants', models.PositiveIntegerField(blank=True, null=True)),
                ('tags', models.CharField(blank=True, max_length=255)),
                ('host', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hosted_events', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
