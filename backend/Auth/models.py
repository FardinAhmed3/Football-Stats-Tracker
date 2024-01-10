from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    real_name = models.CharField(max_length=100)
