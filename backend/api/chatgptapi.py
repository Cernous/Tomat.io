from openai import OpenAI


a = "give me a dish ralates to"
b = "potato"
#c = "only the name is needed, and the material needed, name and material should be divided by ';', each material should be divided by space"
#d = "another should give out the weight of each material correspondingly(unit is gram, do not show the unit), then the carbon emission(unit is kg, do not show the unit), the two things divided by ';', each weight and carbon emission is divided by space"
#f = "always follow the template:'Dish Name: a_name;\n Materials: materials1 materials2 material3 ... materialn;\n Weights: weight1 weight2 weight3 ...;\n Carbon Emissions: 0.422 0.464 0.032 0.008 0.100 0.112 0.001'\n"

c = "in the following json format ```json\n\"Dish_Name\": \"dishname\",\"Materials\": ['material1',...],\"Weights\":[weight1,...], \"Carbon_Emission\":[carbon emission]```"

client = OpenAI(
  
)


completion = client.chat.completions.create(
  model="gpt-4o-mini-2024-07-18",
  store=True,
  messages=[
    {"role": "user", "content": a+b+c}
  ]
)

content = completion.choices[0].message.content.split("{")[1];
content = content.split("}")[0];
#print(content)
each_Line = content.split("\n")
nam_Dish = each_Line[1].split(":")[1].replace('"',"").replace(',','')
print(nam_Dish)

nam_Material = each_Line[2].split(":")[1].replace('[','').replace(']','').split(",")


for item in nam_Material:
    print(item)
# nam_Mat_Wei_Car = completion.choices[0].message.content.split(";");
# 
# dish_Name = nam_Mat_Wei_Car[0].split(":")[1].replace(";","")
# print(nam_Mat_Wei_Car[0])
# print(dish_Name)
# 
# material_name = nam_Mat_Wei_Car[1].split(" ")
# print(material_name[1])

#print(completion.choices[0].message.content);