export type PizzaTypeKeys = 'традиционное' | 'тонкое'
export type PizzaSizeKeys = '20' | '25' | '30' | '35'

interface Ingredients {
    name: string
    removable: boolean
}

export interface Nutrition {
    calories: string
    prot: string
    fat: string
    carbo: string
    weight: string
}

export interface Pizza {
    id: string
    title: string
    types: number[]
    sizes: number[]
    category: number
    rating: number
    imgSrc: string
    description: string
    price: Record<string, number>
    weight: Record<string, Record<string, number>>
    ingredients: Ingredients[]
    nutrition: Record<PizzaTypeKeys, Record<PizzaSizeKeys, Nutrition>>
}
