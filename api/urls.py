from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from .views import MoviesView

urlpatterns = [
    path("movies", csrf_exempt(MoviesView.as_view()), name="musicians"),
]
