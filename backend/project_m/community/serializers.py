from user.models import User
from event.models import Event
from rest_framework import serializers
from .models import Community
import datetime

class CommunityCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = ['name', 'description', 'image']

class CommunityBasicSerializer(serializers.ModelSerializer):
    member_count = serializers.SerializerMethodField()

    class Meta:
        model = Community
        fields = ['id', 'name', 'description', 'created_at', 'updated_at', 'is_active', 'image', 'member_count']

    def get_member_count(self, obj):
        return obj.members.count()
    
    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image and hasattr(obj.image, 'url'):
            return request.build_absolute_uri(obj.image.url)
        return None
    
class EventMinimalSerializer(serializers.ModelSerializer):
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
            'community',
        ]
    
    def get_thumbnail(self, obj):
        request = self.context.get('request')
        if obj.thumbnail and hasattr(obj.thumbnail, 'url'):
            return request.build_absolute_uri(obj.thumbnail.url)
        return None

class UserMinimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'userName', 'is_own_community']
    
class CommunityWithMembersAndEventsSerializer(serializers.ModelSerializer):
    members = UserMinimalSerializer(many=True, read_only=True)
    member_count = serializers.SerializerMethodField()
    events = EventMinimalSerializer(many=True, read_only=True, source='community_events')
    
    class Meta:
        model = Community
        fields = [
            'id', 'name', 'description', 'created_at', 'updated_at',
            'is_active', 'image', 'members', 'member_count', 'events'
        ]

    def get_member_count(self, obj):
        return obj.members.count()
    
    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image and hasattr(obj.image, 'url'):
            return request.build_absolute_uri(obj.image.url)
        return None