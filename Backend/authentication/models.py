"""
    This module defines the custom user model (Users)
    and its manager (CustomUserManager)for authentication purposes.
"""
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager, PermissionsMixin
)
from django.db import models


class CustomUserManager(BaseUserManager):
    """Custom manager for the custom user model (Users)."""
    def create_user(self, email, username, password=None, **extra_fields):
        """
        Creates and saves a regular user with
        the given email, username, and password
        """
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        """
        Creates and saves a superuser with
        the given email, username, and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, username, password, **extra_fields)


class Users(AbstractBaseUser, PermissionsMixin):
    """
    Custom user model extending AbstractBaseUser and PermissionsMixin.
    """
    username = models.CharField(max_length=20, unique=True)
    email = models.EmailField(unique=True, primary_key=True)
    password = models.CharField(max_length=20)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'password']

    objects = CustomUserManager()
