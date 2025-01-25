from fastapi import APIRouter
from api.models import *

router = APIRouter()

recipe :Recipe
hour: int = 0
dishTime: str = ""
inputMessage: str = 0
userChoice: list[str] = []

@router.get("/api/dish/query")
def get_dish(request: UserRequest):
    hour = int(request.time[0:1])
    if 8 <= hour <= 10:
        dishTime = "breakfest"
    elif 11 <= hour <= 3:
        dishTime = "lunch"
    elif 4 <= hour <= 8:
        dishTime = "dinner"
    else:
        dishTime = "snack"

    inputMessage = request.query
    userChoice = request.choice
    '''
    chatgpt part: input is above, give me a output of a recipe model
    '''
    return(recipe)

