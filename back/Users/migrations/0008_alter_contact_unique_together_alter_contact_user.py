# Generated by Django 5.0.4 on 2024-11-18 14:43

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Users', '0007_rename_user_utilisateur'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='contact',
            unique_together=set(),
        ),
        migrations.AlterField(
            model_name='contact',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='utilidateurs', to='Users.utilisateur'),
        ),
    ]
