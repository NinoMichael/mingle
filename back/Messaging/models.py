from django.db import models
from Users.models import User

class Conversation(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_burn_mode = models.BooleanField(default=False)
    expiration = models.DurationField(null=True, blank=True) 
    participants = models.ManyToManyField(User, through='ConversationUser', related_name='conversations')

    class Meta:
        verbose_name = "Conversation"

    def __str__(self):
        return f"Conversation {self.id} - Participants: {[user.identifiant for user in self.participants.all()]}"

class ConversationUser(models.Model):
    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    last_read_message_id = models.IntegerField(null=True, blank=True) 

    class Meta:
        verbose_name = "Conversation Utilisateur"
        unique_together = ('conversation', 'user') 

    def __str__(self):
        return f"{self.user.identifiant} in {self.conversation.id}"

class Message(models.Model):
    conversation = models.ForeignKey(Conversation, related_name='messages', on_delete=models.CASCADE)
    emetteur = models.ForeignKey(User, on_delete=models.CASCADE)
    contenu_chiffre = models.TextField()  
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
