interface Ingredients {
    name: string
    removable: boolean
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
}
