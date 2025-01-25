from fastapi import FastAPI
from fastapi.routing import APIRoute
from starlette.middleware.cors import CORSMiddleware

from api.router import api_router



"""
main.py 

Where it all began...
"""
TITLE = "HELLO WORLD"

def custom_generate_unique_id(route: APIRoute):
    return f'{route.tags[0]}-{route.name}'

if __name__ == "__main__":
    '''
    Think of it as void main() function
    '''

    app =  FastAPI(
        title = TITLE,
        generate_unique_id_function=custom_generate_unique_id,
        openapi_url=f"/api/openapi.json"
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["https://localhost:5173"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],     
    )

    app.include_router(api_router, prefix="/api")
