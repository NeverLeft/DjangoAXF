# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-05-26 15:44
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0009_goods'),
    ]

    operations = [
        migrations.RenameField(
            model_name='goods',
            old_name='strorenums',
            new_name='storenums',
        ),
    ]