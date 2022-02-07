"""
ASGI config for cookie project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/
"""

import os

from channels.auth import AuthMiddlewareStack

from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
from api.routing import websocket_url_patterns
from channels.http import AsgiHandler

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'cookie.settings')

application = ProtocolTypeRouter({
    'http': AsgiHandler(),
    'websocket' : AuthMiddlewareStack(
        URLRouter(
            websocket_url_patterns
        )
    )
})
