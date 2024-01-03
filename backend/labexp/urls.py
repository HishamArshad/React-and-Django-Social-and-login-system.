# urls.py
from django.urls import path
from .views import SnippetCreateView, TeamListView, CommentListView, ClientListView, TodoListView


urlpatterns = [
    path('snippets/create/', SnippetCreateView.as_view(), name='snippet-create'),
    path('teams/', TeamListView.as_view(), name='team-list'),
    path('comments/', CommentListView.as_view(), name='comment-list'),
    path('clients/', ClientListView.as_view(), name='client-list'),
    path('todolists/', TodoListView.as_view(), name='todolist-list'),
]
