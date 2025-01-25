from openai import OpenAI
import os
from dotenv import load_dotenv
from backend.api.models import UserRequest, Recipe, Ingredient
from youtubeapi import video_list
load_dotenv()
__TOKEN = os.getenv("OPENAI_API_KEY")

def __sigin(token: str):
  return OpenAI(
  api_key=__TOKEN
  )

a = "give me a dish ralates to"
b = "potato"
c = "in the following json format ```json\n\"Dish_Name\": \"dishname\",\"Materials\": ['material1',...],\"Weights\":[weight1,...], \"Carbon_Emission\":[carbon emission1,...]```"

def analyze_data(time: str, input: str, choice: str, client: OpenAI):
  completion = client.chat.completions.create(
    model="gpt-4o-mini-2024-07-18",
    store=True,
    messages=[
      {"role": "user", "content": a + input + c + time + choice}
    ]
  )

  content = completion.choices[0].message.content.split("{")[1];
  content = content.split("}")[0]
  each_line = content.split("\n")
  return each_line

def get_dish_name(each_line: list[str]):
  nam_dish = each_line[1].split(":")[1].replace('"',"").replace(',','')
  return nam_dish

def get_material_name_list(each_line: list[str]):
  nam_material = each_line[2].split(":")[1].replace('[','').replace(']','').replace('"','').split(",")
  return nam_material

def get_material_weight_list(each_line: list[str]):
  wei_material = each_line[3].split(":")[1].replace('[','').replace(']','').replace('"','').split(",")
  return wei_material

def get_material_carbon_list(each_line: list[str]):
  car_material = each_line[4].split(":")[1].replace('[','').replace(']','').replace('"','').split(",")
  return car_material

def get_ingredient_list(name_list: list[str], weight_list: list[str], carbon_list: list[str]):
  length = len(name_list)
  ingred = Ingredient(name = '', price = 0, weight = 0, carbon = 0)
  ingred_list = []

  for i in range(length - 1) :
      ingred_list.append(ingred)
      ingred_list[i].name = name_list[i]
      ingred_list[i].weight = weight_list[i]
      ingred_list[i].carbon = carbon_list[i]
      return ingred_list