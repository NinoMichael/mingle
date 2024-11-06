from rest_framework import serializers
from .models import *
from Users.models import *
from Users.serializers import *
 
class ConversationSerializer(serializers.ModelSerializer) : 
     participants = UserSerializer(many=True, read_only=True)

     class Meta:
        model = Conversation
        fields = (
            'id', 
            'created_at', 
            'updated_at', 
            'is_burn_mode', 
            'expiration', 
            'participants')
        read_only_fields = ('created_at', 'updated_at')


class ConversationUserSerializer(serializers.ModelSerializer) :
    conversation = serializers.PrimaryKeyRelatedField(queryset=Conversation.objects.all())
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = ConversationUser
        fields = (
            'id', 
            'conversation', 
            'user', 
            'last_read_message_id', 
            'is_admin')
        read_only_fields = ('id',)

class MessageSerializer(serializers.ModelSerializer) :
    emetteur = serializers.StringRelatedField(read_only=True)
    conversation = serializers.PrimaryKeyRelatedField(queryset=Conversation.objects.all())

    class Meta : 
        model = Message
        fields = (
            'id', 
            'conversation', 
            'emetteur', 
            'contenu', 
            'created_at', 
            'expires_at')
        read_only_fields = ('created_at',)

class SessionCleSerializer(serializers.ModelSerializer):
    conversation = serializers.PrimaryKeyRelatedField(queryset=Conversation.objects.all())

    class Meta:
        model = SessionCle
        fields = (
            'id', 
            'conversation', 
            'aes_cle', 
            'created_at', 
            'expires_at')
        read_only_fields = ('created_at',)