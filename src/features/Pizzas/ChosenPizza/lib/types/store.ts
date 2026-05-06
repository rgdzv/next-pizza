import type { Pizza, PizzaSizeKeys, PizzaTypeKeys } from 'entities/PizzaCard'

export interface ChosenPizzaState {
    pizza: Pizza | undefined
    pizzaSize: PizzaSizeKeys
    pizzaType: PizzaTypeKeys
    ingredients: string[]
    pizzaIngredientPrice: number
}

export interface ChosenPizzaActions {
    setPizza: (newPizza: Pizza) => void
    setPizzaSize: (newSize: PizzaSizeKeys) => void
    setPizzaType: (newType: PizzaTypeKeys) => void
    setIngredient: (ingName: string | null) => void
    setPlusIngredientPrice: (ingPrice: number) => void
    setMinusIngredientPrice: (ingPrice: number) => void
    setUpdateIngredientPrice: (newPrice: number) => void
}

export type ChosenPizzaStore = ChosenPizzaState & ChosenPizzaActions
