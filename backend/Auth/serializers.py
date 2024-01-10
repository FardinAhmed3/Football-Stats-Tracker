from rest_framework import serializers
from django.contrib.auth import get_user_model
#User model
User = get_user_model()

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'real_name', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            real_name=validated_data['real_name'],
            password=validated_data['password']
        )
        return user
