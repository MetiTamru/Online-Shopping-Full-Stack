from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from api.views import ItemViewSet
from django.contrib import admin

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('Items', ItemViewSet, basename='Items')

urlpatterns = [
    path('', include(router.urls)),
     path('admin/', admin.site.urls),
      path('api/', include('api.urls')),


]


urlpatterns +=static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
