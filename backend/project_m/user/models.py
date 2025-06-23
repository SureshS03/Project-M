from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class UserManager(BaseUserManager):
    def create_user(self, userName, email, password=None, bio=None):
        if not email:
            raise ValueError("Users must have an email address")
        if not userName:
            raise ValueError("Users must have a username")
        if not bio:
            raise ValueError("Users must have a bio")
        email = self.normalize_email(email)
        user = self.model(
            userName=userName,
            email=email,
            bio=bio,
            is_host=False
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_hostuser(self, userName, email, password=None, bio=None):
        user = self.create_user(
            userName=userName,
            email=email,
            password=password,
            bio=bio,
        )
        user.is_host = True
        user.save(using=self._db)
        return user

    def update_user(self, userName, email=None, password=None, bio=None):
        user = self.get(userName=userName)
        if email:
            user.email = self.normalize_email(email)
        if password:
            user.set_password(password)
        if bio:
            user.bio = bio
        user.save(using=self._db)
        return user

class User(AbstractBaseUser, PermissionsMixin):
    userName = models.CharField(
        max_length=100,
        unique=True,
        error_messages={'unique': "A user with that username already exists."}
    )
    email = models.EmailField(
        max_length=254,
        unique=True,
        error_messages={'unique': "A user with that email already exists."}
    )
    password = models.CharField(
        max_length=128,
        error_messages={'blank': "Password is required."}
    )
    bio = models.TextField(
        blank=False,
        null=False,
        error_messages={'blank': "Bio cannot be blank."}
    )
    is_host = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'userName'
    REQUIRED_FIELDS = ['email', 'bio']

    objects = UserManager()

    def __str__(self):
        return self.userName
