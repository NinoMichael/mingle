from django.conf import settings
from django.urls import path
from django.conf.urls.static import static
from .views import *

urlpatterns = [
    path('user/', UserListCreateView.as_view(), name='user-list-create'),
    path('user/<int:pk>/', UserDetailView.as_view(), name='client-detail'),
    path('contact/', ContactListCreateView.as_view(), name='contact-list-create'),
    path('contact/<int:pk>/', ContactDetailView.as_view(), name='contact-detail'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)