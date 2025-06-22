from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    username = models.CharField(
        max_length=150,
        unique=True,
        error_messages={
            'unique': "A user with that username already exists."
        } 
    )
    password = models.CharField(
        max_length=128,
        help_text="Required. 128 characters or fewer. Letters, digits and @/./+/-/_ only."
    )    
    email = models.EmailField(
        unique=True,
        error_messages={
            'unique': "A user with that email already exists."
        },      
        help_text="Required. Enter a valid email address."
    )   

