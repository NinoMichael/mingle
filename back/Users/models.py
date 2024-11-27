from django.db import models
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.backends import default_backend
import uuid
import os

class Utilisateur(models.Model):
    nom = models.CharField(max_length=250)
    identifiant = models.CharField(max_length=150, unique=True)
    numero = models.CharField(max_length=20, unique=True)
    email = models.EmailField(unique=True)
    mdp = models.CharField(max_length=128)
    location = models.CharField(max_length=100)
    public_key = models.CharField(
        max_length=1000, default=uuid.uuid4, editable=False
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    img = models.ImageField(upload_to='ImgUser/', null=True, blank=True)

    class Meta:
        verbose_name = "Utilisateur"

    def save(self, *args, **kwargs):
        # Si c'est un nouvel utilisateur
        if not self.pk:
            # Hacher le mot de passe
            self.mdp = make_password(self.mdp)

            # Générer une paire de clés RSA
            private_key = rsa.generate_private_key(
                public_exponent=65537,
                key_size=2048,
                backend=default_backend()
            )

            # Extraire la clé publique en PEM
            public_key_pem = private_key.public_key().public_bytes(
                encoding=serialization.Encoding.PEM,
                format=serialization.PublicFormat.SubjectPublicKeyInfo
            )
            public_key_str = public_key_pem.decode('utf-8')

            # Nettoyer la clé publique (enlever les en-têtes et pieds-de-page)
            public_key_clean = ''.join(public_key_str.splitlines()[1:-1])

            # Stocker la clé publique propre
            self.public_key = public_key_clean

            # Extraire la clé privée en PEM
            private_key_pem = private_key.private_bytes(
                encoding=serialization.Encoding.PEM,
                format=serialization.PrivateFormat.PKCS8,
                encryption_algorithm=serialization.NoEncryption()
            )

            # Définir le chemin pour la clé privée
            private_key_dir = "private_keys"
            private_key_path = os.path.join(private_key_dir, f"{self.identifiant}_private_key.pem")

            # Vérifier et créer le répertoire si nécessaire
            os.makedirs(private_key_dir, exist_ok=True)

            # Écrire la clé privée dans le fichier
            with open(private_key_path, 'wb') as private_file:
                private_file.write(private_key_pem)

        # Sauvegarde des données de l'utilisateur dans la base
        super(Utilisateur, self).save(*args, **kwargs)

    def check_password(self, raw_password):
        # Vérification du mot de passe
        return check_password(raw_password, self.mdp)

    def __str__(self):
        return self.identifiant


class Contact(models.Model):
    user = models.ForeignKey(Utilisateur, related_name='utilisateurs', on_delete=models.CASCADE)
    contact = models.ForeignKey(Utilisateur, related_name='user_contacts', on_delete=models.CASCADE)
    statut = models.CharField(max_length=20, choices=[('pending', 'En cours'), ('accepted', 'Accepté'), ('blocked', 'Refusé')])
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.identifiant} - {self.contact.identifiant} ({self.statut})"



# Create your models here.
