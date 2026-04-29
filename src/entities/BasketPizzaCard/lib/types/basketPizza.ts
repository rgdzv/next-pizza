import type { PizzaSizeKeys, PizzaTypeKeys } from 'entities/PizzaCard'

export interface BasketPizza {
    id: string
    imgSrc: string
    title: string
    size: PizzaSizeKeys
    type: PizzaTypeKeys
    price: number
    weight: string
    count: number
    totalPriceForCount?: number
}
