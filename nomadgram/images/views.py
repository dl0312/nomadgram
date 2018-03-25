from rest_framework.views import APIView
from rest_framework.response import Response
from . import models, serializers

class Feed(APIView):

    def get(self, request, format=None):
        
        user = request.user
        
        folllowing_users = user.following.all()

        image_list = []
        
        print(request.user.following.all())
        
        for folllowing_user in folllowing_users:
            user_images = folllowing_user.images.all()[:2]
            for image in user_images:
                image_list.append(image)
        sorted_list = sorted(image_list,key=lambda image: image.created_at, reverse=True)
        print(sorted_list)
        serializer = serializers.ImageSerializer(sorted_list, many=True)

        return Response(serializer.data)

class LikeImage(APIView):

    def get(self, request, image_id, format=None):
        print(image_id)
        return Response(status=200)

#/images/3/like

# 1. take the id from the url
# 2. we want to find an image with this id
# 3. we want to create a like for that image

# class ListAllImages(APIView):

#     def get(self, request, format=None):

#         all_images = models.Image.objects.all()

#         serializer = serializers.ImageSerializer(all_images, many=True)

#         return Response(data=serializer.data)

# class ListAllComments(APIView):

#     def get(self, request, format=None):

#         all_comments = models.Comment.objects.all()

#         serializer = serializers.CommentSerializer(all_comments, many=True)

#         return Response(data=serializer.data)

# class ListAllLikes(APIView):

#     def get(self, request, format=None):

#         all_likes = models.Like.objects.all()

#         serializer = serializers.LikeSerializer(all_likes, many=True)

#         return Response(data=serializer.data)