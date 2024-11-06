from django.contrib import admin
from .models import Conversation, ConversationUser, Message, SessionCle

@admin.register(Conversation)
class ConversationAdmin(admin.ModelAdmin):
    list_display = ('id', 'is_burn_mode', 'created_at', 'updated_at')
    search_fields = ('participants__identifiant',)
    list_filter = ('is_burn_mode', 'created_at', 'updated_at')
    ordering = ('created_at',)
    readonly_fields = ('created_at', 'updated_at')

@admin.register(ConversationUser)
class ConversationUserAdmin(admin.ModelAdmin):
    list_display = ('conversation', 'user', 'last_read_message_id')
    search_fields = ('conversation__id', 'user__identifiant')
    list_filter = ('conversation', 'user')
    ordering = ('conversation', 'user')
    readonly_fields = ('last_read_message_id',)

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'emetteur', 'conversation', 'created_at', 'expires_at')
    search_fields = ('emetteur__identifiant', 'conversation__id', 'contenu_chiffre')
    list_filter = ('created_at', 'expires_at')
    ordering = ('created_at',)
    readonly_fields = ('created_at',)

@admin.register(SessionCle)
class SessionCleAdmin(admin.ModelAdmin):
    list_display = ('conversation', 'created_at', 'expires_at')
    search_fields = ('conversation__id',)
    list_filter = ('created_at', 'expires_at')
    ordering = ('created_at',)
    readonly_fields = ('created_at',)

# Register your models here.
