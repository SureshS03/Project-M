from django.urls import path
from .views import EventListCreateView, EventDetailView

urlpatterns = [
    path('event/', EventListCreateView.as_view(), name='host-event-create'),
    path('eventdetails/<int:pk>/', EventDetailView.as_view(), name='user-event-details'),
]
