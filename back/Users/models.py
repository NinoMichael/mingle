from django.db import models
from django.contrib.auth.hashers import make_password

class User(models.Model):
    nom = models.CharField(max_length=250)
    identifiant = models.CharField(max_length=150, unique=True)
    numero = models.CharField(max_length=20, unique=True)
    email = models.EmailField(unique=True)
    mdp = models.CharField(max_length=128)
    location = models.CharField(max_length = 100)
    public_key = models.TextField()  
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    img = models.ImageField(upload_to='ImgUser/', null=True, blank=True)

    class Meta:
        verbose_name = "Utilisateur"

    def save(self, *args, **kwargs):
        if not self.pk:  
            self.mdp = make_password(self.mdp)
        super(User, self).save(*args, **kwargs)

    def __str__(self):
        return self.identifiant


class Contact(models.Model):
    user = models.ForeignKey(User, related_name='contacts', on_delete=models.CASCADE)
    contact = models.ForeignKey(User, related_name='user_contacts', on_delete=models.CASCADE)
    statut = models.CharField(max_length=20, choices=[('pending', 'En cours'), ('accepted', 'Accepté'), ('blocked', 'Refusé')])
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'contact') 

    def __str__(self):
        return f"{self.user.identifiant} - {self.contact.identifiant} ({self.statut})"



# Create your models here.
