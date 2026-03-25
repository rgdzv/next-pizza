export interface AdditionalIngredients {
    id: string
    src: string
    name: string
}

export type AdditionalIngredientsPrice = Record<string, Record<string, string>>
