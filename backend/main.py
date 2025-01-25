from fastapi import FastAPI
from fastapi.routing import APIRoute
from starlette.middleware.cors import CORSMiddleware

from api.router import api_router

from core import config

"""
main.py 

Where it all began...
"""

def custom_generate_unique_id(route: APIRoute):
    return f'{route.tags[0]}-{route.name}'

'''
Think of it as void main() function
'''

app =  FastAPI(
    title = config.TITLE,
    generate_unique_id_function=custom_generate_unique_id,
    openapi_url=f"{config.PREFIX}/openapi.json"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=config.ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix=config.PREFIX)
