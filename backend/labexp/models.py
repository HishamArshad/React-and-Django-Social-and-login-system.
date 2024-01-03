from django.db import models
from django.utils import timezone
from accounts.models import MyUser

class Team(models.Model):
    name = models.CharField(max_length=255)
    users = models.ManyToManyField(MyUser)
    def __str__(self):
        return self.name

class Comment(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    changed_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(MyUser, related_name='Comment',on_delete=models.CASCADE)
    def __str__(self):
        return f"Comment by {self.created_by.email} on {self.created_at}"



class Client(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    comment = models.ManyToManyField(Comment, blank=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    changed_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.name

class TodoList(models.Model):
    client = models.ForeignKey(Client, related_name='TodoList',on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    comment = models.ManyToManyField(Comment, blank=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    changed_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(MyUser, related_name='TodoList',on_delete=models.CASCADE)
    def __str__(self):
        return self.name

class Snippet(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    
    def __str__(self):
        return self.name
