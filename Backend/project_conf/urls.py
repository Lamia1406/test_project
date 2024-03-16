"""
URL configuration for backend project.
"""
from django.contrib import admin
from django.urls import path, include
from django.urls import path
from django.views.static import serve
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('authentication.urls')),
]
