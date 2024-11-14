from rest_framework import serializers
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.tokens import RefreshToken
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id', 
            'nom', 
            'identifiant', 
            'numero',
            'email', 
            'public_key', 
            'created_at', 
            'updated_at', 
            'img')
        read_only_fields = ('created_at', 'updated_at')

class UserLoginSerializer(serializers.Serializer):
    identifiant = serializers.CharField()
    mdp = serializers.CharField(write_only=True)

    def validate(self, data):
        identifiant = data.get('identifiant')
        mdp = data.get('mdp')

        try:
            user = User.objects.get(identifiant=identifiant)
        except User.DoesNotExist:
            raise serializers.ValidationError("L'identifiant ou le mot de passe est incorrect.")

        if not check_password(mdp, user.mdp):
            raise serializers.ValidationError("L'identifiant ou le mot de passe est incorrect.")

        return {
            'identifiant': user.identifiant,
            'tokens': self.get_tokens(user),
            'user': UserSerializer(user).data,
        }

    def get_tokens(self, user):
        refresh = RefreshToken.for_user(user)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

class ContactSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    contact = serializers.StringRelatedField(read_only=True)
    numero = serializers.SerializerMethodField()
    img = serializers.SerializerMethodField()
    email = serializers.SerializerMethodField()
    location = serializers.SerializerMethodField()

    class Meta:
        model = Contact
        fields = (
            'id',
            'user',
            'numero',
            'img',
            'contact',
            'email',
            'location',
            'statut',
            'created_at'
        )
    
    def get_email(self, obj):
        return obj.user.email if obj.user else None
    def get_numero(self, obj):
        return obj.user.numero if obj.user else None
    def get_location(self, obj):
        return obj.user.location if obj.user else None
    def get_img(self, obj):
        return obj.user.img.url if obj.user and obj.user.img else None