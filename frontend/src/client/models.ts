
export type Ingredient = {
    name: string
    price: string
    weight: string
    carbon: string
}

export type Recipe = {
    name: string
    ingredient: Array<Ingredient>
    links: Array<String>
    price: string
}

export type UserRequest = {
    //24:00
    time: string
    query: string
    choice: Array<String>
}