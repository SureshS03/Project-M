from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'userName', 'email', 'bio', 'is_host', 'is_own_community','created_at']

class UserSignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['userName', 'email', 'bio', 'password']

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class UserLoginSerializer(serializers.Serializer):
    userName = serializers.CharField()
    password = serializers.CharField()
    def validate(self, data):
        user = User.objects.filter(userName=data['userName']).first()
        if user and user.check_password(data['password']):
            data['user'] = user
            return data
        raise serializers.ValidationError("Invalid username or password")
