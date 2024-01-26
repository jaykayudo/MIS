from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import  GetUserByToken, PlanViewSet, ProjectViewSet, StateViewSet, IndicatorViewSet


urlpatterns = [
    path('getuserbytoken/', GetUserByToken.as_view()),
]

router = DefaultRouter()
router.register('projects',ProjectViewSet)
router.register('plans',PlanViewSet)
router.register('states',StateViewSet)
router.register('indicators',IndicatorViewSet)
viewset_urls = router.urls
urlpatterns += viewset_urls
