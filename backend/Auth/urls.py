from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CustomUserViewSet

router = DefaultRouter()
router.register(r'users', CustomUserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # Custom paths for signup and login
    path('signup/', CustomUserViewSet.as_view({'post': 'signup'}), name='signup'),
    path('login/', CustomUserViewSet.as_view({'post': 'login'}), name='login'),
]
