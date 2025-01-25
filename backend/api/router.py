from fastapi import APIRouter

from api import dish

api_router = APIRouter()

api_router.include_router(dish.router, prefix = "dish", tags=["dish"])
