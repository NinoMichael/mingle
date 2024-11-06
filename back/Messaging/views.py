from rest_framework import generics
from .models import Conversation, ConversationUser, Message, SessionCle
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

class MessageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

class SessionCleListCreateView(generics.ListCreateAPIView):
    queryset = SessionCle.objects.all()
    serializer_class = SessionCleSerializer

class SessionCleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SessionCle.objects.all()
    serializer_class = SessionCleSerializer

# Create your views here.
