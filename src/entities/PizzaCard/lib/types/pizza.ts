export type PizzaType = 'thin' | 'traditional'
export type PizzaSize = 20 | 25 | 30 | 35

export type AddonPriceKey = `${PizzaType}_${PizzaSize}`

export interface PizzaCategory {
    id: number
    slug: string
    name: string
}

export interface PizzaNutrition {
    calories: number
    protein: number
    fat: number
    carbs: number
}

export interface PizzaVariant {
    id: string
    dough: PizzaType
    size: PizzaSize
    price: number
    img: string
    weight: number
    nutrition: PizzaNutrition
}

export interface PizzaIngredient {
    id: string
    name: string
    removable: boolean
}

export interface Pizza {
    id: string
    slug: string
    title: string
    category: PizzaCategory
    rating: number
    description: string
    imgSrc: string
    minPrice: number
    isAvailable: boolean
    ingredients: PizzaIngredient[]
    variants: PizzaVariant[]
}
