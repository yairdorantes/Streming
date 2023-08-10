# Create your views here.
from django.views import View
import json
from django.http import JsonResponse
from .models import Movies


class MoviesView(View):
    def get(self, request):
        movies = list(Movies.objects.values())
        return JsonResponse({"movies": movies})
