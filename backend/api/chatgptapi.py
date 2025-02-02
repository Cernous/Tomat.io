from openai import OpenAI
import os
from dotenv import load_dotenv
from models import UserRequest, Recipe, Ingredient

load_dotenv()
__TOKEN = os.getenv("OPENAI_API_KEY")

def sign_in():
  return OpenAI(
  api_key=__TOKEN
  )

def analyze_data(time: str, input: str, choice: str, client: OpenAI):
  completion = client.chat.completions.create(
    model="gpt-4o-mini-2024-07-18",
    store=True,
    messages=[
      {"role": "user", "content": "give me a dish relates to" + input + "in the following json format ```json\n\"Dish_Name\": \"dishname\",\"Materials\": ['material1',...],\"Weights\":[weight1,...], \"Carbon_Emission\":[carbon emission1,...]```" + "Weight should be measured in pounds "+ time + choice}
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
  length = min([len(name_list), len(weight_list), len(carbon_list)])
  ingred_list = []
  for i in range(length):
    ingred_list.append(Ingredient(name=name_list[i].strip(), weight=weight_list[i].strip(), carbon=carbon_list[i].strip(), price="0"))
  return ingred_list