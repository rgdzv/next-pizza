import type { PizzaSize, PizzaType } from 'entities/PizzaCard'
export interface BasketPizza {
    id: string
    imgSrc: string
    title: string
    size: PizzaSize
    type: PizzaType
    price: number
    weight: number
    count: number
    totalPriceForCount?: number
    ingredients: string[]
}
