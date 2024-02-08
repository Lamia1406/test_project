# views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .users import Users
@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get("email")
        password = data.get('password')
        # I need to hash the password later
        hashed_password = password

        user = Users.objects.create(username=username,email=email, password=hashed_password)

        return JsonResponse({'message': 'User registered successfully'})

    return JsonResponse({'message': 'Invalid request'})
