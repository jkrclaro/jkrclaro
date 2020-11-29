from django.urls import path

from .views import index


app_name = 'johnclaro.bookshelf'

urlpatterns = [
    path('', index, name='index')
]
