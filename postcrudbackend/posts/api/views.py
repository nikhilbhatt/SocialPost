from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from posts.models import Post
from posts.api.serializers import PostSerializer
from posts.api.serializers import PostListSerializer
# from authentication.modeles import Authentication

@api_view(['GET',])
def api_detail_post_view(request,slug):
    try:
        post=Post.objects.get(slug=slug)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method== "GET":
        serializer=PostSerializer(post)
        return Response(serializer.data)

@api_view(['PUT',])
def api_update_post_view(request,slug):
    try:
        post=Post.objects.get(slug=slug)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method== "PUT":
        serializer=PostSerializer(post,data=request.data)
        data={}
        if serializer.is_valid():
            serializer.save()
            data["success"]="udpate successful"
            return Response(data=data)
        return Response(serializer.errors,status=status.HTTP_404_BBAD_REQUEST)

@api_view(['DELETE',])
def api_delete_post_view(request,slug):
    try:
        post=Post.objects.get(slug=slug)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method== "DELETE":
        operation=post.delete()
        data={}
        if operation:
            data["success"]="delete successful"
        else:
            data["failure"]="delete failed"
        return Response(data=data)

@api_view(['POST'])
def api_create_post_view(request):
    if request.method=="POST":
        serializer=PostSerializer(data=request.data)
        data={}
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def api_list_post_view(request):
    data=Post.objects.all()
    if request.method== "GET":
        serializer=PostListSerializer(data,many=True)
        return Response(serializer.data)