from django.db import models

# Create your models here.
class Musicians(models.Model):
    name  = models.CharField(verbose_name="Nombre",max_length=200)
    email = models.EmailField(verbose_name="Correo electronico")
    phone = models.CharField(verbose_name="Numero telefonico",max_length=15)
    message = models.TextField(verbose_name="Mensaje")
    
    def __str__(self):
        return self.name