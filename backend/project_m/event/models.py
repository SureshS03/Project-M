from django.db import models
from django.conf import settings
from django.core.exceptions import ValidationError
import datetime

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    time = models.TimeField(default=datetime.time(0, 0))

    host = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="hosted_events"
    )

    community = models.ForeignKey(
    'community.Community',
    on_delete=models.CASCADE,
    related_name='events_list',
    )


    place = models.CharField(max_length=255)

    venue = models.CharField(max_length=255)
    registration_close_date = models.DateField(null=True, blank=True)
    registration_close_time = models.TimeField(null=True, blank=True)

    event_mode = models.CharField(
        max_length=50,
        choices=[
            ('online', 'Online'),
            ('offline', 'Offline'),
            ('hybrid', 'Hybrid')
        ],
        default='offline'
    )

    thumbnail = models.ImageField(upload_to='event_thumbnails/', blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    is_active = models.BooleanField(default=True)
    event_type = models.CharField(
        max_length=50,
        choices=[
            ('workshop', 'Workshop'),
            ('seminar', 'Seminar'),
            ('conference', 'Conference'),
            ('webinar', 'Webinar'),
            ('meetup', 'Meetup')
        ],
        default='workshop'
    )
    max_participants = models.PositiveIntegerField(null=True, blank=True)

    tags = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.title

    def clean(self):
        today = datetime.date.today()
        if not self.title.strip():
            raise ValidationError("Title cannot be empty.")
        if not self.venue.strip():
            raise ValidationError("Venue cannot be empty.")
        if self.registration_close_date and self.registration_close_date < today:
            raise ValidationError("Registration close date cannot be in the past.")