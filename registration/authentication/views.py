from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
     return HttpResponse("hello i'm working")



# def home (request):
#     return render(request, '../authentication/templates/Home.html')