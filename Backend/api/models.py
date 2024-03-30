from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save

class User(AbstractUser):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


    def __str__ (self):
        return self.username
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=1000)
    bio = models.CharField(max_length=100)
    image = models.ImageField(upload_to="user_images", default="default.jpg")
    verified = models.BooleanField(default=False)

    def __str__ (self):
        return self.full_name

def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)
 

class Item(models.Model):
    image = models.ImageField(upload_to='item_images/', null=True, blank=True)
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    quantity = models.IntegerField(default=0)
    UNIT_CHOICES = [
        ('ltr', 'Liter'),
        ('kg', 'Kilogram'),
        ('pcs', 'Pieces'),
    ]
    unit_of_measure = models.CharField(max_length=10, choices=UNIT_CHOICES)
    price = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    

    def __str__(self):
        return self.name
  