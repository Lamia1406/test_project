# views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password
import json
from .users import Users
@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get("email")
        password = data.get('password')
        hashed_password = make_password(password)
        print(hashed_password)
        Users.objects.create(username=username,email=email, password=hashed_password)

        return JsonResponse({'message': 'registered successfully'})

    return JsonResponse({'message': 'Invalid request'})
