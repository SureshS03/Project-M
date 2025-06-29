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

class EventMinimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'title', 'date', 'image','event_type', 'event_mode', 'is_active']

class UserMinimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'userName', 'is_own_community']
    
class CommunityWithMembersAndEventsSerializer(serializers.ModelSerializer):
    members = UserMinimalSerializer(many=True, read_only=True)
    member_count = serializers.SerializerMethodField()
    events = EventMinimalSerializer(many=True, read_only=True)

    class Meta:
        model = Community
        fields = [
            'id', 'name', 'description', 'created_at', 'updated_at',
            'is_active', 'image', 'members', 'member_count', 'events'
        ]

    def get_member_count(self, obj):
        return obj.members.count()