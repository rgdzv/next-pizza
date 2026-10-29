import type { PizzaType, PizzaSize } from '../types/pizza'

export enum PIZZA_SIZES {
    EXTRA_SMALL = 20,
    SMALL = 25,
    MIDDLE = 30,
    LARGE = 35
}

export const PIZZA_SIZES_LIST: PizzaSize[] = [
    PIZZA_SIZES.EXTRA_SMALL,
    PIZZA_SIZES.SMALL,
    PIZZA_SIZES.MIDDLE,
    PIZZA_SIZES.LARGE
]

export enum PIZZA_TYPES {
    TRADITIONAL = 'traditional',
    THIN = 'thin'
}

export const PIZZA_TYPES_LIST: { id: PizzaType; name: string }[] = [
    { id: PIZZA_TYPES.TRADITIONAL, name: 'традиционное' },
    { id: PIZZA_TYPES.THIN, name: 'тонкое' }
]
