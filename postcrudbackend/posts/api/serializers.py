from rest_framework import serializers

from posts.models import Post
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model=Post 
        fields=['title','body','image','date_update','date_published']

class PostListSerializer(serializers.ModelSerializer):
    class Meta:
        model=Post
        fields=['id','title','body','image','date_update','slug']