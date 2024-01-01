from django.db import models

class Team(models.Model):
    name = models.CharField(max_length=100)

class Player(models.Model):
    name = models.CharField(max_length=100)
    #team = models.ForeignKey(Team, related_name='players', on_delete=models.CASCADE)
    team = models.ForeignKey(Team, related_name='players', on_delete=models.SET_NULL, null=True, blank=True)
    # Game Stats
    goals = models.IntegerField(default=0)
    assists = models.IntegerField(default=0)
    interceptions = models.IntegerField(default=0)
    fouls = models.IntegerField(default=0)
    # Personal Stats
    pace = models.IntegerField(default=0)
    stamina = models.IntegerField(default=0)
    defense = models.IntegerField(default=0)
    attack = models.IntegerField(default=0)
    dribble = models.IntegerField(default=0)
    physique = models.IntegerField(default=0)

    class Meta:
        constraints = [
            models.CheckConstraint(check=models.Q(pace__range=(0, 10)), name='pace_range'),
            models.CheckConstraint(check=models.Q(stamina__range=(0, 10)), name='stamina_range'),
            models.CheckConstraint(check=models.Q(defense__range=(0, 10)), name='defense_range'),
            models.CheckConstraint(check=models.Q(attack__range=(0, 10)), name='attack_range'),
            models.CheckConstraint(check=models.Q(dribble__range=(0, 10)), name='dribble_range'),
            models.CheckConstraint(check=models.Q(physique__range=(0, 10)), name='physique_range'),

        ]
