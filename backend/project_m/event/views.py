from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.exceptions import PermissionDenied
from django.shortcuts import get_object_or_404
from .models import Event
from .serializers import EventSerializer
from community.models import Community  # Import Community model

class EventListCreateView(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        user = request.user
        if not user.is_authenticated:
            return Response({"detail": "Authentication required."}, status=status.HTTP_401_UNAUTHORIZED)

        community_id = request.data.get("community_id")
        if not community_id:
            return Response({"detail": "community_id is required"}, status=status.HTTP_400_BAD_REQUEST)

        community = get_object_or_404(Community, id=community_id)

        if community.owner != user:
            return Response(
                {"detail": "You are not the owner of this community."},
                status=status.HTTP_403_FORBIDDEN
            )

        serializer = EventSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save(host=user, community=community)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EventDetailView(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_object(self, pk):
        return get_object_or_404(Event, pk=pk)

    def get(self, request, pk):
        event = self.get_object(pk)
        serializer = EventSerializer(event, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        event = self.get_object(pk)
        if event.host != request.user:
            raise PermissionDenied("Only the host can update this event.")

        serializer = EventSerializer(event, data=request.data, partial=True, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        event = self.get_object(pk)
        if event.host != request.user:
            raise PermissionDenied("Only the host can delete this event.")
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
