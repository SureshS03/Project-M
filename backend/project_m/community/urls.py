from django.urls import path
from .views import (
    CommunityCreateView,
    CommunityListView,
    CommunityDetailView,
    EventsByCommunityView,
    JoinCommunityView,
    LeaveCommunityView,
)

urlpatterns = [
    path('communities/create/', CommunityCreateView.as_view()),
    path('communities/all/', CommunityListView.as_view()),
    path('communities/<int:community_id>/', CommunityDetailView.as_view()),
    path('communities/<int:community_id>/join/', JoinCommunityView.as_view()),
    path('communities/<int:community_id>/leave/', LeaveCommunityView.as_view()),
    path('events/by-community/', EventsByCommunityView.as_view()),
]