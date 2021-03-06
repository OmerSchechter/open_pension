# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-11-14 18:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pension', '0002_auto_20161114_1723'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='author',
            field=models.CharField(blank=True, max_length=255, verbose_name='author'),
        ),
        migrations.AlterField(
            model_name='blog',
            name='tags',
            field=models.ManyToManyField(blank=True, related_name='תגיות', to='pension.Tags'),
        ),
    ]
