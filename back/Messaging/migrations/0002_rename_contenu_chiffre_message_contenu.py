# Generated by Django 5.0.4 on 2024-11-17 12:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Messaging', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='message',
            old_name='contenu_chiffre',
            new_name='contenu',
        ),
    ]