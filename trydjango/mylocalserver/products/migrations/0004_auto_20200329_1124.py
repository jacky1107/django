# Generated by Django 2.0.7 on 2020-03-29 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_product_featured'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.TextField(blank=True, default=True),
            preserve_default=False,
        ),
    ]