from django.db import models

class Users(models.Model):
    username = models.CharField(max_length=20, primary_key=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=20)
