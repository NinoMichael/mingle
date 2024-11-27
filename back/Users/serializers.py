from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields = (
            'id', 
            'nom', 
            'identifiant', 
            'numero',
            'email', 
            'mdp',
            'location',
            'public_key', 
            'created_at', 
            'updated_at', 
            'img')
        read_only_fields = ('created_at', 'updated_at')
    

class ContactSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    contact = serializers.StringRelatedField(read_only=True)
    numero = serializers.SerializerMethodField()
    nom = serializers.SerializerMethodField()
    img = serializers.SerializerMethodField()
    email = serializers.SerializerMethodField()
    location = serializers.SerializerMethodField()
    nomContact = serializers.SerializerMethodField()
    numeroContact = serializers.SerializerMethodField()
    locationContact = serializers.SerializerMethodField()
    emailContact = serializers.SerializerMethodField()
    imgContact = serializers.SerializerMethodField()
    idContact = serializers.SerializerMethodField()
    idUser = serializers.SerializerMethodField()

    class Meta:
        model = Contact
        fields = (
            'id',
            'idUser',
            'numero',
            'img',
            'nom',
            'user',
            'idContact',
            'nomContact',
            'numeroContact',
            'emailContact',
            'locationContact',
            'imgContact',
            'contact',
            'email',
            'location',
            'statut',
            'created_at'
        )
    
    def get_idUser(self, obj):
        return obj.user.id if obj.user else None
    def get_email(self, obj):
        return obj.user.email if obj.user else None
    def get_numero(self, obj):
        return obj.user.numero if obj.user else None
    def get_location(self, obj):
        return obj.user.location if obj.user else None
    def get_nom(self, obj):
        return obj.user.nom if obj.user else None
    def get_idContact(self, obj):
        return obj.contact.id if obj.contact else None
    def get_nomContact(self, obj):
        return obj.contact.nom if obj.contact else None
    def get_numeroContact(self, obj):
        return obj.contact.numero if obj.contact else None
    def get_emailContact(self, obj):
        return obj.contact.email if obj.contact else None
    def get_locationContact(self, obj):
        return obj.contact.location if obj.contact else None
    def get_imgContact(self, obj):
        if obj.contact and obj.contact.img:
            return obj.contact.img.url
        return None
    def get_img(self, obj):
        if obj.user and obj.user.img:
            return obj.user.img.url
        return None