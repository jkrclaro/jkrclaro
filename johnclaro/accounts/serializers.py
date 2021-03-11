from django.contrib.auth import get_user_model

from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

User = get_user_model()
User._meta.get_field('email')._unique = True


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    default_error_messages = {
        'no_active_account': 'Incorrect email or password.'
    }


class UserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        required=True,
        style={
            'input_type': 'password'
        }
    )
    password2 = serializers.CharField(
        style={
            'input_type': 'password'
        },
        write_only=True,
        label='Confirm password'
    )

    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'password',
            'password2',
        ]
        extra_kwargs = {
            'email': {
                'error_messages': {
                    'required': 'Please enter a valid email.'
                }
            },
            'username': {
                'error_messages': {
                    'required': 'Please enter a valid email.'
                }
            },
            'password': {
                'write_only': True,
                'error_messages': {
                    'required': 'Please enter a password.'
                }
            }
        }

    def create(self, validated_data):
        username = validated_data['username']
        email = validated_data['email']
        password = validated_data['password']
        password2 = validated_data['password2']
        if email and User.objects.filter(email=email).exclude(username=username).exists():
            raise serializers.ValidationError(
                {'email': 'An account already exists with this email.'}
            )
        if password != password2:
            raise serializers.ValidationError(
                {'password': 'Re-enter your password confirmation so it matches your password.'}
            )
        user = User(username=username, email=email)
        user.set_password(password)
        user.save()
        return user
