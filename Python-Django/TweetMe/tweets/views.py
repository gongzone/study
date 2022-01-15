import random
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from .models import Tweet

# Create your views here.

def home_view(request, *args, **kwargs):
  return render(request, "pages/home.html", context={}, status=200)

def tweet_list_view(request, *args, **kwargs):
  qs = Tweet.objects.all()
  tweets_list = [{"id": x.id, "content": x.content, "likes": random.randint(0, 125)} for x in qs]
  data = {
    "isUser": False,
    "response": tweets_list
  }

  return JsonResponse(data)

def tweet_detail_view(request, tweet_id, *args, **kwargs):
  """
  Rest API VIEW
  return json data
  """
  data = {
    "id": tweet_id,
  }

  status = 200

  try:
    obj = Tweet.objects.get(id=tweet_id)
    data['content'] = obj.content
  except:
    data['message'] = "Not found"
    status = 404

  return JsonResponse(data, status=status) # json.dumps content_type='application/json'
