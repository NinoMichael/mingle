# Generated by Django 5.0.4 on 2024-11-23 13:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Users', '0010_remove_utilisateur_groups_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='utilisateurs', to='Users.utilisateur'),
        ),
    ]
