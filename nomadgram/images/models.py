from django.db import models

# Create your models here.
class TimeStampeModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Image(TimeStampeModel):

    file = models.ImageField()
    location = models.CharField(max_length=140)
    caption = models.TextField()

class Comment(TimeStampeModel):

    message = models.TextField()