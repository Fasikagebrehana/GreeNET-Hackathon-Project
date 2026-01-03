from django.db import models
from django.contrib.auth.models import User
# Create your models here.
# define a Profile class

# connect it using a One-to-One relationship
# Profile cannot exist without User

# Deleting a user deletes their profile

# Role must be restricted to known values
class Profile(models.Model):
    USER_ROLES = [
        ('farmer', 'Farmer'),
        ('trader', 'Trader'),
        ('govofficial', 'Government Official'),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=USER_ROLES)
    region = models.CharField(max_length=100)
    preferences = models.JSONField(default=dict,blank=True)
    def __str__(self):
        return f"{self.user.username} - {self.role}"