from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id', 
            'nom', 
            'identifiant', 
            'email', 
            'public_key', 
            'created_at', 
            'updated_at', 
            'img')
        read_only_fields = ('created_at', 'updated_at')

class ContactSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    contact = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Contact
        fields = (
            'id',
            'user',
            'contact',
            'statut',
            'created_at'
        )