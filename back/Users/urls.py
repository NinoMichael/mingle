from django.conf import settings
from django.urls import path
from django.conf.urls.static import static
from .views import *
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('user-list-create/', UserListCreateView.as_view(), name='user-list-create'),
    path('user-detail/', UserDetailView.as_view(), name='user-detail'),
    path('contacts/', ContactListCreateView.as_view(), name='contact-list-create'),
    path('contacts/list/', ContactListView.as_view(), name='contact-list'),
    path('contacts/<int:pk>/', ContactDetailView.as_view(), name='contact-detail'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name ='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name ='token_refresh')
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)