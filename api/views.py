# Create your views here.
from django.views import View
import json
from django.http import JsonResponse
from .models import Musicians
# from django.contrib.auth import authenticate
class save_musicians(View):
    def get(self, request):
        return JsonResponse({"message":"nice"})
    
    def post(self, request):
        jd = json.loads(request.body)
        Musicians.objects.create(**jd)
        return JsonResponse({"message":"success!"})
   