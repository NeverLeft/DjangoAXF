# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-05-29 17:31
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0011_usermodel'),
    ]

    operations = [
        migrations.CreateModel(
            name='CartModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('c_goods_num', models.IntegerField(default=1)),
                ('c_goods_select', models.BooleanField(default=True)),
                ('c_goods', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='App.Goods')),
                ('c_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='App.UserModel')),
            ],
        ),
    ]
