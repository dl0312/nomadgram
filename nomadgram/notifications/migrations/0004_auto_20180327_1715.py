# Generated by Django 2.0.3 on 2018-03-27 08:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0003_notification_comment'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='notification',
            options={'ordering': ['-created_at']},
        ),
    ]
