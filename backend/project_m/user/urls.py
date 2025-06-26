from django.urls import path
from .views import SignupView, LoginView, UserListView, SingleUserView

urlpatterns = [
    path('signup/', SignupView.as_view(), name='user-signup'),
    path('login/', LoginView.as_view(), name='user-login'),
    path('', UserListView.as_view(), name='user-list'),
    path('<int:user_id>/', SingleUserView.as_view(), name='get_user_by_id'),
]
