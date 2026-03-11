export interface Pizza {
    id: string
    title: string
    category: number
    rating: number
    imgSrc: string
    description: string
    weight: Record<string, Record<string, number>>
    ingredients: Ingredients[]
    details: Record<PizzaTypeKeys, Record<PizzaSizeKeys, Details>>
}
interface Ingredients {
    name: string
    removable: boolean
}

export type PizzaTypeKeys = 'традиционное' | 'тонкое'
export type PizzaSizeKeys = '20' | '25' | '30' | '35'

export interface Details {
    nutrition: Nutrition
    price: string
}
export interface Nutrition {
    calories: string
    prot: string
    fat: string
    carbo: string
    weight: string
}
