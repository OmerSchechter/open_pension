# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-26 17:59
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Example',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=255)),
                ('title_he', models.CharField(blank=True, max_length=255, null=True)),
                ('title_en', models.CharField(blank=True, max_length=255, null=True)),
                ('number', models.CharField(choices=[('int', 'Integer'), ('float', 'Float')], default='int', max_length=25)),
            ],
        ),
    ]
