from rest_framework import serializers
from .models import Event
import datetime

class EventSerializer(serializers.ModelSerializer):
    host_username = serializers.CharField(source='host.userName', read_only=True)

    class Meta:
        model = Event
        fields = [
            'id',
            'title',
            'description',
            'date',
            'time',
            'host',
            'host_username',
            'place',
            'venue',
            'registration_close_date',
            'registration_close_time',
            'event_mode',
            'thumbnail',
            'created_at',
            'updated_at',
            'is_active',
            'max_participants',
            'community_id',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'host', 'host_username']

    def validate(self, data):
        reg_date = data.get('registration_close_date')
        if reg_date and reg_date < datetime.date.today():
            raise serializers.ValidationError("Registration close date cannot be in the past.")
        return data