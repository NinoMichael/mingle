# Generated by Django 5.0.4 on 2024-11-17 13:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Messaging', '0003_alter_message_conversation'),
        ('Users', '0006_remove_user_is_active_remove_user_is_staff_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='User',
            new_name='Utilisateur',
        ),
    ]
