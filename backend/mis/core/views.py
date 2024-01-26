from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from .serializers import UserSerializer, StateSerializer, PlanSerializer, ProjectSerializer, IndicatorSerializer
from .models import Plan, Project, Indicator, State
from rest_framework.viewsets import ModelViewSet

class GetUserByToken(APIView):
    def post(self,request,*args,**kwargs):
        serailzed_user = UserSerializer(request.user)
        return Response({"key":request.auth.key,"user":serailzed_user.data})
    
# class UserViewSet(ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class PlanViewSet(ModelViewSet):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer
class IndicatorViewSet(ModelViewSet):
    queryset = Indicator.objects.all()
    serializer_class = IndicatorSerializer

class StateViewSet(ModelViewSet):
    queryset = State.objects.all()
    serializer_class = StateSerializer