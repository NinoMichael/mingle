# Generated by Django 5.0.4 on 2024-11-17 12:43

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Messaging', '0002_rename_contenu_chiffre_message_contenu'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='conversation',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='messages', to='Messaging.conversation'),
        ),
    ]
