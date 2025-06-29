from django.db import models
from django.conf import settings
from django.core.exceptions import ValidationError
import datetime


class Community(models.Model):
    name = models.CharField(max_length=200, unique=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    image = models.ImageField(upload_to='community_images/', blank=True, null=True)
    
    #events = models.ManyToManyField(
     #   settings.EVENTS_MODEL,
      #  related_name='events',
       # blank=True
    #)
    
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="owned_communities"
    )
    
    members = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name="communities",
        blank=True
    )

    def __str__(self):
        return self.name

    def clean(self):
        if not self.name.strip():
            raise ValidationError("Community name cannot be empty.")
        if self.description and len(self.description) < 10:
            raise ValidationError("Community description must be at least 10 characters long.")