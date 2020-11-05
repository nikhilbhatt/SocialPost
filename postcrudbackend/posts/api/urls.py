from django.urls import path
from posts.api.views import (
        api_detail_post_view,
        api_update_post_view,
        api_delete_post_view,
        api_create_post_view,
        api_list_post_view
    )

app_name='posts'

urlpatterns = [
    path('<slug>/',api_detail_post_view,name="post-detail"),
    path('<slug>/update',api_update_post_view,name="post-udpate"),
    path('<slug>/delete',api_delete_post_view,name="post-delete"),
    path('create',api_create_post_view,name="post-create"),
    path('',api_list_post_view,name="post-list")
]