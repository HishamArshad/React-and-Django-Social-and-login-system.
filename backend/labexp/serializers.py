 
from rest_framework import serializers
from .models import Snippet
# serializers.py
from rest_framework import serializers
from .models import Team, Comment, Client, TodoList
from authemail.serializers import UserSerializer

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class TeamSerializer(serializers.ModelSerializer):
    users = UserSerializer(many=True, read_only=True)
    class Meta:
        model = Team
        fields = '__all__'

class ClientSerializer(serializers.ModelSerializer):
    comment = CommentSerializer(many=True, read_only=True)
    class Meta:
        model = Client
        fields = '__all__'

class TodoListSerializer(serializers.ModelSerializer):
    comment = CommentSerializer(many=True, read_only=True)
    created_by = UserSerializer(read_only=True)
    class Meta:
        model = TodoList
        fields = '__all__'

class SnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Snippet
        fields = '__all__'

    def validate_title(self, value):
        # Accessing other fields directly through initial_data
        content = self.initial_data.get('content', '')

        if len(value) < 15 and len(content) > 1:
            raise serializers.ValidationError('Title must be 15 characters long when content is greater than 1 characters.')
        
        return value
