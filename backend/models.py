"""
Models

This is where our OpenAPI will refer to for json application
"""

from sqlmodel import Field, Relationship, SQLModel


class Ingredient(SQLModel):
    name: str
    price: str
    weight: str
    carbon: str


class Recipe(SQLModel):
    name: str
    ingredient: list[Ingredient]
    links: list[str]

class UserRequest(SQLModel):
    time: str
    query: str
    choice: list[str]
