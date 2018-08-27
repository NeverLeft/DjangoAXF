from django.contrib import admin

# Register your models here.
from App.models import Goods, HomeWheel


class GoodAdmin(admin.ModelAdmin):
    list_display = ['productlongname', 'price']
    list_filter = ['childcidname', 'productlongname']
    search_fields = ['productlongname', ]
    list_per_page = 20
    ordering = ['price', ]
    fieldsets = (
        ('商品分类', {"fields": ("childcidname",)}),
        ('基本信息', {"fields": ("productlongname","price",)}),

    )


admin.site.register(Goods, GoodAdmin)
admin.site.register(HomeWheel)
