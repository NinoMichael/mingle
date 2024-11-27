from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.db.models import Q
from .models import Utilisateur, Contact
from .serializers import UserSerializer, ContactSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.parsers import JSONParser

class UserListCreateView(APIView):
    def get(self, request):
        exclude_user_id = request.query_params.get('utilisateurId', None)
        
        if exclude_user_id:
            utilisateurs = Utilisateur.objects.exclude(id=exclude_user_id)
        else:
            utilisateurs = Utilisateur.objects.all()
        
        serializer = UserSerializer(utilisateurs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):            
            serializer = UserSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLoginView(APIView):
    def post(self, request):
        identifiant = request.data.get('identifiant')
        mdp = request.data.get('mdp')
        print(identifiant)
        print(mdp)

        try:
            user = Utilisateur.objects.get(identifiant=identifiant)
        except Utilisateur.DoesNotExist:
            return Response({"detail": "Identifiant ou mot de passe incorrect"}, status=status.HTTP_401_UNAUTHORIZED)

        if user.check_password(mdp):
            refresh = RefreshToken.for_user(user)
            user_data = UserSerializer(user).data
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user' : user_data
            }, status=status.HTTP_200_OK)

        return Response({"detail": "Identifiant ou mot de passe incorrect"}, status=status.HTTP_401_UNAUTHORIZED)


class UserDetailView(APIView):
    def get(self, request):
        identifiant = request.query_params.get('identifiant')
        email = request.query_params.get('email')
        numero = request.query_params.get('numero')

        try:
            user = Utilisateur.objects.get(identifiant=identifiant, email=email, numero=numero)
            user_data = UserSerializer(user).data
            return Response(user_data, status=status.HTTP_200_OK)
        except Utilisateur.DoesNotExist:
            return Response({"detail": "Identifiant ou mot de passe incorrect"}, status=status.HTTP_401_UNAUTHORIZED)

    def put(self, request, pk):
        try:
            utilisateur = Utilisateur.objects.get(pk=pk)
            serializer = UserSerializer(utilisateur, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Utilisateur.DoesNotExist:
            return Response({"detail": "Utilisateur non trouvé"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        try:
            utilisateur = Utilisateur.objects.get(pk=pk)
            utilisateur.delete()
            return Response({"detail": "Utilisateur supprimé"}, status=status.HTTP_204_NO_CONTENT)
        except Utilisateur.DoesNotExist:
            return Response({"detail": "Utilisateur non trouvé"}, status=status.HTTP_404_NOT_FOUND)


class ContactListCreateView(APIView):
    def get(self, request, *args, **kwargs):
        user_id = request.query_params.get('utilisateurId') 
        if not user_id:
            return Response({"error": "user_id parameter is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = Utilisateur.objects.get(pk=user_id)  
        except Utilisateur.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        
        contacts = Contact.objects.filter(contact=user, statut="pending")
        serializer = ContactSerializer(contacts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        user_id = request.data.get('user')
        contact_id = request.data.get('contact')
        statut = request.data.get('statut')

        if not user_id or not contact_id:
            return Response({"error": "Both 'user' and 'contact' fields are required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = Utilisateur.objects.get(pk=user_id)
            contact = Utilisateur.objects.get(pk=contact_id)
        except Utilisateur.DoesNotExist:
            return Response({"error": "Invalid user or contact ID."}, status=status.HTTP_404_NOT_FOUND)

        contact_instance = Contact.objects.create(user=user, contact=contact, statut=statut)
        serializer = ContactSerializer(contact_instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def put(self, request):
        contact_id = request.data.get('contact_id')
        statut = request.data.get('statut')  

        if not contact_id or not statut:
            return Response(
                {"error": "Both 'contact_id' and 'statut' fields are required."}, 
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            contact = Contact.objects.get(pk=contact_id)
        except Contact.DoesNotExist:
            return Response({"error": "Contact not found."}, status=status.HTTP_404_NOT_FOUND)

        contact.statut = statut
        contact.save()

        serializer = ContactSerializer(contact)
        return Response(serializer.data, status=status.HTTP_200_OK)

class ContactListView(APIView):
    def get(self, request, *args, **kwargs):
        user_id = request.query_params.get('utilisateurId') 
        if not user_id:
            return Response({"error": "user_id parameter is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = Utilisateur.objects.get(pk=user_id)  
        except Utilisateur.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        
        contacts = Contact.objects.filter(user=user)
        serializer = ContactSerializer(contacts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class ContactDetailView(APIView):
    def get(self, request, pk):
        try:
            contact = Contact.objects.get(pk=pk)
            serializer = ContactSerializer(contact)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Contact.DoesNotExist:
            return Response({"detail": "Contact non trouvé"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        try:
            contact = Contact.objects.get(pk=pk)
            serializer = ContactSerializer(contact, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Contact.DoesNotExist:
            return Response({"detail": "Contact non trouvé"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        try:
            contact = Contact.objects.get(pk=pk)
            contact.delete()
            return Response({"detail": "Contact supprimé"}, status=status.HTTP_204_NO_CONTENT)
        except Contact.DoesNotExist:
            return Response({"detail": "Contact non trouvé"}, status=status.HTTP_404_NOT_FOUND)
