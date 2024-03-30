from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import ItemViewSet
from rest_framework.routers import DefaultRouter
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

router = DefaultRouter()
router.register('Items', ItemViewSet, basename='Items')

admin_urlpatterns = [
    path('/admin', admin.site.urls),  
]

urlpatterns = [
    path('', include(router.urls)),
    path('', include(admin_urlpatterns)),
     path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test'),
    path('', views.getRoutes),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
