# coding=utf-8
from django.contrib import admin
from .models import Setup


class SetupAdmin(admin.ModelAdmin):
    list_display = ('__unicode__', 'email')

    def has_add_permission(self, request):
        if Setup.objects.count() == 0:
            return True
        else:
            return False


admin.site.register(Setup, SetupAdmin)
