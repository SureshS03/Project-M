from django.urls import path
from .views import SignupView, LoginView, UserListView

urlpatterns = [
    path('signup/', SignupView.as_view(), name='user-signup'),
    path('login/', LoginView.as_view(), name='user-login'),
    path('', UserListView.as_view(), name='user-list'),
]
