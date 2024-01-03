from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Snippet
from .serializers import SnippetSerializer
from rest_framework import generics
from .models import Team, Comment, Client, TodoList
from .serializers import TeamSerializer, CommentSerializer, ClientSerializer, TodoListSerializer

class TeamListView(generics.ListCreateAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class CommentListView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class ClientListView(generics.ListCreateAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class TodoListView(generics.ListCreateAPIView):
    queryset = TodoList.objects.all()
    serializer_class = TodoListSerializer























class SnippetCreateView(APIView):
    def get(self, request, format=None):
        snippets = Snippet.objects.all()
        serializer = SnippetSerializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = SnippetSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, format=None):
        # Assuming you pass the ID of the snippet to delete in the request data
        snippet_id = request.data.get('id', None)

        if snippet_id is not None:
            try:
                snippet = Snippet.objects.get(id=snippet_id)
                snippet.delete()
                return Response({"message": "Snippet deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
            except Snippet.DoesNotExist:
                return Response({"error": "Snippet not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "ID of the snippet to delete is required"}, status=status.HTTP_400_BAD_REQUEST)
