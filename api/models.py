from django.db import models

# Create your models here.


class Movies(models.Model):
    name = models.CharField(verbose_name="movie's name", max_length=100)
    location = models.URLField(verbose_name="movie's url")
    image = models.TextField(verbose_name="movie's poster")

    def __str__(self) -> str:
        return self.name
