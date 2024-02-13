from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.contrib.auth.hashers import make_password
import json
import re
from voice_assistant import speak_girly_voice, recognize_speech, model, palm
from django.contrib.auth import authenticate, login, get_user_model
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.db import IntegrityError


User = get_user_model()
@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get("email")
        password = data.get('password')

        try:
            validate_email(email)
            domain = email.split('@')[1]
            if not domain.endswith('constantine2.dz'):
                return JsonResponse({'message': 'Email must be a university email '}, status=400)
        except ValidationError:
            return JsonResponse({'message': 'Invalid email'}, status=400)

        try:
            user, created = User.objects.get_or_create(username=username, email=email, defaults={'password': make_password(password)})

            if not created:
                return JsonResponse({'message': 'Username or email already exists.'}, status=400)

        except IntegrityError as e:
            return JsonResponse({'message': 'An error occurred while creating the user.'}, status=400)

        if not re.match(r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$", password):
            return JsonResponse({'message': 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character, and be at least 8 characters long'}, status=400)

        return JsonResponse({'message': 'Registered successfully'})

    return JsonResponse({'message': 'Invalid request'})

@csrf_exempt
def login_user(request):
    try:
        if request.method == 'POST':
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            user = authenticate(request, email=email, password=password)
            print(f"user : {user}")
            if user is not None:
                login(request, user)
                return JsonResponse({'message': 'Login successful'})
            else:
                return JsonResponse({'message': 'Invalid email or password'}, status=401)

    except User.DoesNotExist:
        return JsonResponse({"message": "User not found"})


@csrf_exempt
@require_POST
def process_speech(request):
    user_input = recognize_speech()
    print("User's question:", user_input)
    completion = palm.generate_text(
        model=model,
        prompt=user_input,  
        temperature=0.3,
        max_output_tokens=800,
    )
    speak_girly_voice(completion.result, "output.mp3")
    response_data = {'response': 'Success'}
    return JsonResponse(response_data)


def getUser(request):
    print(User.objects.all())
    return JsonResponse({"users":"users"})
