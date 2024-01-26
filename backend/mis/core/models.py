from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager


class BaseManager(UserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """
        Create and save a user with the given username, email, and password.
        """
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)

# Create your models here.
class User(AbstractUser):
    username = None
    email = models.EmailField(
        'EMail',
        max_length=150,
        unique=True,
        help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.',
        error_messages={
            'unique': "A user with that email already exists.",
        },
    )
    objects = BaseManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self) :
        return f"{self.email}"


class State(models.Model):
    name = models.CharField(max_length = 100)
    longitude = models.DecimalField(decimal_places = 6, max_digits=9, blank = True, null=True)
    latitude = models.DecimalField(decimal_places = 6, max_digits=9, blank = True, null=True)
    
    def __str__(self):
        return self.name

class Plan(models.Model):
    name = models.CharField(max_length=100)
    summary = models.TextField()
    objective = models.TextField()
    priority_areas = models.TextField()
    school_code = models.CharField(max_length = 20)
    user = models.ForeignKey(User, null = True, blank = True, on_delete = models.SET_NULL)
    currency = models.CharField(max_length = 50)
    grant_amount = models.DecimalField(decimal_places=2, max_digits = 15)
    year = models.IntegerField()
    state = models.ForeignKey(State, null = True, blank = True, on_delete = models.SET_NULL)
    lga = models.CharField(max_length = 100)
    community = models.CharField(max_length = 100)
    longitude = models.DecimalField(decimal_places = 6, max_digits=9, null = True, blank = True)
    latitude = models.DecimalField(decimal_places = 6, max_digits=9, null = True, blank = True)

    def __str__(self):
        return self.name

class Project(models.Model):
    name = models.CharField(max_length = 100)
    description = models.TextField()
    plan = models.ForeignKey(Plan,on_delete = models.CASCADE)
    state = models.ForeignKey(State, null = True, blank = True, on_delete = models.SET_NULL)
    lga = models.CharField(max_length = 100)
    location = models.TextField()
    source_of_funding = models.CharField(max_length = 100)
    level_of_completion = models.IntegerField(default = 0)
    currency = models.CharField(max_length = 50)
    cost = models.DecimalField(decimal_places=2, max_digits = 15)
    status = models.IntegerField(choices=((1,"not started"),(2,"in progress"),(3,"completed"),(4,"cancelled")))
    longitude = models.DecimalField(decimal_places = 6, max_digits=9)
    latitude = models.DecimalField(decimal_places = 6, max_digits=9)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.name

class Indicator(models.Model):
    name = models.CharField(max_length = 100)
    baseline = models.IntegerField(default = 0)
    actual = models.IntegerField(default = 0)
    target = models.IntegerField(default = 0)
    def  __str__(self):
        return self.name


        