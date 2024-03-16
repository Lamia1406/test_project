from django.urls import path
from .views import register_user, login_user, process_speech, logout_user
urlpatterns = [
    path('api/register/', register_user, name='register_user'),
    path("api/login/", login_user, name="login_user"),
    path('', register_user, name='root'),
    path("api/virtual_assistant", process_speech, name="virtual_assistant"),
    path("api/logout", logout_user, name="logout_user"),
]
