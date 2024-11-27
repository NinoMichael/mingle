from django.db import models
from Users.models import Utilisateur
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives.asymmetric.rsa import RSAPublicKey, RSAPrivateKey
from cryptography.hazmat.primitives import serialization
import os
import base64

class Conversation(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_burn_mode = models.BooleanField(default=False)
    expiration = models.DurationField(null=True, blank=True) 
    participants = models.ManyToManyField(Utilisateur, through='ConversationUser', related_name='conversations')

    class Meta:
        verbose_name = "Conversation"

    def __str__(self):
        return f"Conversation {self.id} - Participants: {[user.identifiant for user in self.participants.all()]}"

class ConversationUser(models.Model):
    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE)
    user = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
    last_read_message_id = models.IntegerField(null=True, blank=True) 

    class Meta:
        verbose_name = "Conversation Utilisateur"
        unique_together = ('conversation', 'user') 

    def __str__(self):
        return f"{self.user.identifiant} in {self.conversation.id}"

class Message(models.Model):
    conversation = models.ForeignKey(
        Conversation, on_delete=models.CASCADE, related_name='messages', null=True, blank=True
    )
    emetteur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
    contenu = models.TextField()  
    hmac = models.CharField(max_length=256)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField(null=True, blank=True)  

    class Meta:
        verbose_name = "Message" 

    def __str__(self):
        return f"Message {self.id} from {self.emetteur.identifiant}"

class SessionCle(models.Model):
    conversation = models.OneToOneField(Conversation, on_delete=models.CASCADE, related_name='session_cle')
    aes_cle = models.TextField()  
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        verbose_name = "Session clé" 

    def __str__(self):
        return f"Clé de session de la conversation {self.conversation.id}"
    
    def encrypt_message(self, plaintext):
        """Chiffrement du message avec AES."""
        aes_key = base64.b64decode(self.aes_cle)
        iv = os.urandom(16)
        cipher = Cipher(algorithms.AES(aes_key), modes.CFB(iv), backend=default_backend())
        encryptor = cipher.encryptor()
        ciphertext = encryptor.update(plaintext.encode()) + encryptor.finalize()
        return base64.b64encode(iv + ciphertext).decode('utf-8')

    def decrypt_message(self, ciphertext):
        """Déchiffrement du message avec AES."""
        aes_key = base64.b64decode(self.aes_cle)
        data = base64.b64decode(ciphertext)
        iv, ciphertext = data[:16], data[16:]
        cipher = Cipher(algorithms.AES(aes_key), modes.CFB(iv), backend=default_backend())
        decryptor = cipher.decryptor()
        plaintext = decryptor.update(ciphertext) + decryptor.finalize()
        return plaintext.decode('utf-8')

    @staticmethod
    def generate_aes_key():
        """Génération d'une clé AES aléatoire."""
        return base64.b64encode(os.urandom(32)).decode('utf-8')

    @staticmethod
    def encrypt_aes_key(public_key, aes_key):
        """Chiffrement de la clé AES avec la clé publique RSA."""
        return base64.b64encode(
            public_key.encrypt(
                aes_key.encode('utf-8'),
                padding.OAEP(
                    mgf=padding.MGF1(algorithm=hashes.SHA256()),
                    algorithm=hashes.SHA256(),
                    label=None
                )
            )
        ).decode('utf-8')

    @staticmethod
    def decrypt_aes_key(private_key, encrypted_aes_key):
        """Déchiffrement de la clé AES avec la clé privée RSA."""
        return private_key.decrypt(
            base64.b64decode(encrypted_aes_key),
            padding.OAEP(
                mgf=padding.MGF1(algorithm=hashes.SHA256()),
                algorithm=hashes.SHA256(),
                label=None
            )
        ).decode('utf-8')
