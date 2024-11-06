from django.conf import settings
from django.urls import path
from django.conf.urls.static import static
from .views import *

urlpatterns = [
    path('conversation/', ConversationListCreateView.as_view(), name='conversation-list-create'),
    path('conversation/<int:pk>/', ConversationDetailView.as_view(), name='conversation-detail'),
    path('conversation-user/', ConversationUserListCreateView.as_view(), name='conversation-user-list-create'),
    path('conversation-user/<int:pk>/', ConversationDetailView.as_view(), name='conversation-user-detail'),
    path('message/', MessageListCreateView.as_view(), name='message-list-create'),
    path('message/<int:pk>/', MessageDetailView.as_view(), name='message-detail'),
    path('session-key/', SessionCleListCreateView.as_view(), name = 'session-key-list-create'),
    path('session-key/<int:pk>/', SessionCleDetailView.as_view(), name = 'session-key-detail')
]