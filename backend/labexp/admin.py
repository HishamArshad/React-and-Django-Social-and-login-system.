from django.contrib import admin
from .models import Snippet, Team, Client, Comment, TodoList

# Register your models here
 
admin.site.register(Team)
admin.site.register(Comment)
admin.site.register(TodoList)
admin.site.register(Client)
admin.site.register(Snippet)
