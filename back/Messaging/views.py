from rest_framework import generics
from rest_framework import serializers
from rest_framework import permissions
from .models import Conversation, ConversationUser, Message, SessionCle
from Users.models import Utilisateur
from django.db.models import Q
from django.core.exceptions import ObjectDoesNotExist
from .serializers import  ConversationSerializer, ConversationUserSerializer, MessageSerializer, SessionCleSerializer

class ConversationListCreateView(generics.ListCreateAPIView):
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer

class ConversationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer

class ConversationUserListCreateView(generics.ListCreateAPIView):
    queryset = ConversationUser.objects.all()
    serializer_class = ConversationUserSerializer

class ConversationUserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ConversationUser.objects.all()
    serializer_class = ConversationUserSerializer

class MessageListCreateView(generics.ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    def get_queryset(self):
        sender_id = self.request.query_params.get('senderId', None)
        receiver_id = self.request.query_params.get('receiverId', None)

        if sender_id and receiver_id:
            return Message.objects.filter(
                Q(emetteur_id=sender_id, conversation__participants__id=receiver_id) |
                Q(emetteur_id=receiver_id, conversation__participants__id=sender_id)
            ).distinct()
        
        return Message.objects.all()

    def perform_create(self, serializer):
        contenu = self.request.data.get('contenu')
        emetteur_id = self.request.data.get('emetteur_id')
        destinataire_id = self.request.data.get('destinataire_id')

        if not contenu or not emetteur_id or not destinataire_id:
            raise serializers.ValidationError("Le contenu, l'émetteur et le destinataire sont obligatoires.")

        try:
            utilisateurAuth = Utilisateur.objects.get(id=emetteur_id)
            destinataire = Utilisateur.objects.get(id=destinataire_id)
            print(destinataire.identifiant)
        except ObjectDoesNotExist:
            raise serializers.ValidationError("Utilisateur introuvable avec cet ID.")

        conversation = Conversation.objects.filter(participants=utilisateurAuth).filter(participants=destinataire).first()

        if not conversation:
            conversation = Conversation.objects.create()
            conversation.participants.add(utilisateurAuth, destinataire)

        serializer.save(conversation=conversation, emetteur=utilisateurAuth)


class MessageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

class SessionCleListCreateView(generics.ListCreateAPIView):
    queryset = SessionCle.objects.all()

class SessionCleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SessionCle.objects.all()

# Create your views here.
