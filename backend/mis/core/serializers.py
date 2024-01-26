from rest_framework.authtoken.models import Token
from rest_framework import serializers
from .models import User, Plan, Project, State, Indicator



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','email']

class IndicatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Indicator
        fields = "__all__"

class PlanSerializer(serializers.ModelSerializer):
    state_str = serializers.StringRelatedField()
    user_str = serializers.StringRelatedField()
    class Meta:
        model = Plan
        fields = "__all__"

class ProjectSerializer(serializers.ModelSerializer):
    state_str = serializers.StringRelatedField()
    plan_str = serializers.StringRelatedField()
    class Meta:
        model = Project
        fields = "__all__"

class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = "__all__"