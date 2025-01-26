from fastapi import APIRouter
from models import UserRequest, Ingredient, Recipe
from api.chatgptapi import *
from api.youtubeapi import search_youtube_videos
from api.check_price import *
router = APIRouter()

@router.post("/query", response_model=Recipe)
def get_dish(request: UserRequest):
    recipe: Recipe = Recipe(name="", ingredient=[], links=[], price="")
    hour: int = 0
    dishTime: str = ""
    inputMessage: str = 0
    userChoice: str = ""
    content: list[str] = []

    hour = int(request.time[0:1])
    if 8 <= hour <= 10:
        dishTime = "for breakfest"
    elif 11 <= hour <= 3:
        dishTime = "for lunch"
    elif 4 <= hour <= 8:
        dishTime = "for dinner"
    else:
        dishTime = "for snack"

    inputMessage = request.query
    userChoice = " ".join(request.choice)
    '''
    chatgpt part: input is above, give me a output of a recipe model
    '''
    client = sign_in()
    content = analyze_data(dishTime, inputMessage, userChoice, client)
    dish_name = get_dish_name(content)
    name_list = get_material_name_list(content)
    weight_list = get_material_weight_list(content)
    carbon_list = get_material_carbon_list(content)
    ingred = get_ingredient_list(name_list, weight_list, carbon_list)
    print(ingred)
    priCe: float = 0
    for item in ingred:
        NamE = item.name
        WeighT = item.weight
        priceOfItem = checkPri(NamE, client)
        wei =float(WeighT) 
        single_Price = (priceOfItem)*wei
        priCe += single_Price

    video_links = search_youtube_videos(dish_name, 3)
    recipe.name = dish_name
    recipe.ingredient = ingred
    recipe.links = [v['link'] for v in video_links]
    recipe.price = str(round(priCe,2))
    print(recipe)
    return(recipe)

