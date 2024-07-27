# football_app/views.py

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Team, Player
from .serializers import TeamSerializer, PlayerSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    permission_classes = [IsAuthenticated]

class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
    permission_classes = [IsAuthenticated]
