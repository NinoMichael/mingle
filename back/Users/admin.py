from django.contrib import admin
from .models import User, Contact

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('nom', 'identifiant', 'numero', 'email', 'location', 'created_at', 'updated_at')
    search_fields = ('nom', 'identifiant', 'numero', 'email')
    list_filter = ('created_at', 'updated_at')
    ordering = ('created_at',)
    readonly_fields = ('created_at', 'updated_at')

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('user', 'contact', 'statut', 'created_at')
    search_fields = ('user__identifiant', 'contact__identifiant', 'statut')
    list_filter = ('statut', 'created_at')
    ordering = ('created_at',)
    readonly_fields = ('created_at',)

# Register your models here.
