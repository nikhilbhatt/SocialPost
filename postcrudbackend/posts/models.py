from django.db import models

from django.utils.text import slugify
from django.conf import settings
from django.db.models.signals import post_delete,pre_save
from django.dispatch import receiver

# Create your models here.

def upload_location(instance,filename,**kwargs):
    file_path='posts/images/{title}-{filename}'.format(title=str(instance.title),filename=filename)
    return file_path

class Post(models.Model):
    title=models.CharField(max_length=50,null=False,blank=False)
    body=models.CharField(max_length=2000,null=False,blank=False)
    image=models.ImageField(upload_to=upload_location,null=False,blank=False)
    date_published=models.DateTimeField(auto_now_add=True,verbose_name="date published")
    date_update=models.DateTimeField(auto_now=True,verbose_name="date updated")
    # author=models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    slug=models.SlugField(blank=True,unique=True)

    def __str__(self):
        return self.title

@receiver(post_delete, sender=Post)
def _submission_delete(sender, instance,**kwargs):
    instance.image.delete(False)
    
def pre_save_post_reciever (sender,instance,*args, **kwargs):
    if not instance.slug:
        instance.slug=slugify(instance.title[0:10]+"-" +instance.body[0:10])

pre_save.connect(pre_save_post_reciever,sender=Post)