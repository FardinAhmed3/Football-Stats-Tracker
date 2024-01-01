from rest_framework import serializers
from .models import Team, Player

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'name']

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ['id', 'name', 'team', 'goals', 'assists', 'interceptions', 'fouls',
                   'pace', 'stamina', 'defense', 'attack', 'dribble', 'physique']
