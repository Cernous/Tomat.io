
export type Ingredient = {
    name: string
    price: number
    weight: number
    carbon: number
}

export type Recipe = {
    name: string
    ingredient: Array<Ingredient>
    links: Array<String>
}

export type UserRequest = {
    time: string
    query: string
    choice: Array<String>
}