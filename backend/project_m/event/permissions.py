from rest_framework import permissions
from community.models import Community

class IsActiveCommunityOwner(permissions.BasePermission):
    def has_permission(self, request, view):
        user = request.user
        return (
            user.is_authenticated and
            Community.objects.filter(owner=user, is_active=True).exists()
        )
