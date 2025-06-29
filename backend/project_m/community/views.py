from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .models import Community
from event.models import Event
from .serializers import (
    CommunityCreateUpdateSerializer,
    CommunityBasicSerializer,
    CommunityWithMembersAndEventsSerializer,
    EventMinimalSerializer,
)
from django.shortcuts import get_object_or_404

class CommunityCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = CommunityCreateUpdateSerializer(data=request.data)
        if serializer.is_valid():
            community = serializer.save(owner=request.user)
            community.members.add(request.user)

            request.user.is_own_community = True
            request.user.save()

            return Response({"message": "Community created", "id": community.id}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CommunityListView(APIView):
    def get(self, request):
        communities = Community.objects.all()
        serializer = CommunityBasicSerializer(communities,  many=True, context={'request': request})
        return Response(serializer.data)


class CommunityDetailView(APIView):
    def get(self, request, community_id):
        community = get_object_or_404(Community, id=community_id)
        serializer = CommunityWithMembersAndEventsSerializer(community, context={'request': request})
        return Response(serializer.data)

    def put(self, request, community_id):
        community = get_object_or_404(Community, id=community_id)

        # Only owner can update
        if community.owner != request.user:
            return Response({"error": "You are not the owner of this community."}, status=403)

        serializer = CommunityCreateUpdateSerializer(community, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Community updated successfully"})
        return Response(serializer.errors, status=400)
    
    def delete(self, request, community_id):
        community = get_object_or_404(Community, id=community_id)

        if community.owner != request.user:
            return Response({"error": "Only the owner can delete the community"}, status=403)

        community.delete()
        return Response({"message": "Community deleted"}, status=204)

class EventsByCommunityView(APIView):
    def get(self, request):
        community_id = request.query_params.get('community_id')
        if not community_id:
            return Response({"error": "community_id is required"}, status=400)

        community = get_object_or_404(Community, id=community_id)
        events = community.events.all()
        serializer = EventMinimalSerializer(events, many=True)
        return Response(serializer.data)

class JoinCommunityView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, community_id):
        community = get_object_or_404(Community, id=community_id)
        
        if request.user in community.members.all():
            return Response({"message": "You are already a member"}, status=400)

        community.members.add(request.user)
        return Response({"message": "Successfully joined the community"}, status=200)

class LeaveCommunityView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, community_id):
        community = get_object_or_404(Community, id=community_id)

        if request.user not in community.members.all():
            return Response({"message": "You are not a member"}, status=400)

        # Don't allow owner to leave their own community
        if community.owner == request.user:
            return Response({"error": "Owner cannot leave their own community"}, status=403)

        community.members.remove(request.user)
        return Response({"message": "You have left the community"}, status=200)

