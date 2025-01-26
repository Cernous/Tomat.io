from openai import OpenAI
import os
from dotenv import load_dotenv



load_dotenv()
__TOKEN = os.getenv("OPENAI_API_KEY")

def sign_in():
  return OpenAI(
  api_key=__TOKEN
  )

def checkPri(materiNam:str, client: OpenAI):
  completion = client.chat.completions.create(
    model="gpt-4o-mini-2024-07-18",
    store=True,
    messages=[
      {"role": "user", "content": "content should only contain an float!!!do not give out any string!find a price of" + materiNam + "which show the price of the item per 1 pound in dollar"}
    ]
  )
  return float(completion.choices[0].message.content)
