# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-05-26 10:52
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0004_foodtype'),
    ]

    operations = [
        migrations.RenameField(
            model_name='foodtype',
            old_name='chiletypenames',
            new_name='childypenames',
        ),
    ]
