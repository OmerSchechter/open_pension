# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-11-14 18:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pension', '0003_auto_20161114_2007'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='author_en',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='author'),
        ),
        migrations.AddField(
            model_name='blog',
            name='author_he',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='author'),
        ),
    ]