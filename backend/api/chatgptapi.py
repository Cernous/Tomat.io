from openai import OpenAI
import os
from dotenv import load_dotenv
from models import UserRequest, Recipe, Ingredient
load_dotenv()
__TOKEN = os.getenv("OPENAI_API_KEY")


a = "give me a dish ralates to"
b = "potato"
#c = "only the name is needed, and the material needed, name and material should be divided by ';', each material should be divided by space"
#d = "another should give out the weight of each material correspondingly(unit is gram, do not show the unit), then the carbon emission(unit is kg, do not show the unit), the two things divided by ';', each weight and carbon emission is divided by space"
#f = "always follow the template:'Dish Name: a_name;\n Materials: materials1 materials2 material3 ... materialn;\n Weights: weight1 weight2 weight3 ...;\n Carbon Emissions: 0.422 0.464 0.032 0.008 0.100 0.112 0.001'\n"

c = "in the following json format ```json\n\"Dish_Name\": \"dishname\",\"Materials\": ['material1',...],\"Weights\":[weight1,...], \"Carbon_Emission\":[carbon emission1,...]```"

client = OpenAI(
  api_key=__TOKEN
)


completion = client.chat.completions.create(
  model="gpt-4o-mini-2024-07-18",
  store=True,
  messages=[
    {"role": "user", "content": a+b+c}
  ]
)

content = completion.choices[0].message.content.split("{")[1];
content = content.split("}")[0]

each_Line = content.split("\n")
nam_Dish = each_Line[1].split(":")[1].replace('"',"").replace(',','')
Recipe = nam_Dish
print(nam_Dish)

nam_Material = each_Line[2].split(":")[1].replace('[','').replace(']','').replace('"','').split(",")

wei_Material = each_Line[3].split(":")[1].replace('[','').replace(']','').replace('"','').split(",")

car_Material = each_Line[4].split(":")[1].replace('[','').replace(']','').replace('"','').split(",")

len_inte = len(nam_Material)    
ingre = Ingredient(name='',price=0,weight=0,carbon=0)
list_ingre = []
for i in range(len_inte-1):
    list_ingre.append(ingre)
    list_ingre[i].name = nam_Material[i]
    list_ingre[i].weight = wei_Material[i]
    list_ingre[i].carbon = car_Material[i]

print(list_ingre[0].name)

#for item in nam_Material:
#    print(item)
# nam_Mat_Wei_Car = completion.choices[0].message.content.split(";");
# 
# dish_Name = nam_Mat_Wei_Car[0].split(":")[1].replace(";","")
# print(nam_Mat_Wei_Car[0])
# print(dish_Name)
# 
# material_name = nam_Mat_Wei_Car[1].split(" ")
# print(material_name[1])

#print(completion.choices[0].message.content);