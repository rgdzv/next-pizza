import type { Pizza, PizzaSize, PizzaType } from 'entities/PizzaCard'

export interface ChosenPizzaState {
    pizza: Pizza | undefined
    pizzaSize: PizzaSize
    pizzaType: PizzaType
    ingredients: string[]
    pizzaIngredientPrice: number
}

export interface ChosenPizzaActions {
    setPizza: (newPizza: Pizza) => void
    setPizzaSize: (newSize: PizzaSize) => void
    setPizzaType: (newType: PizzaType) => void
    setIngredient: (ingName: string | null) => void
    setPlusIngredientPrice: (ingPrice: number) => void
    setMinusIngredientPrice: (ingPrice: number) => void
    setUpdateIngredientPrice: (newPrice: number) => void
}

export type ChosenPizzaStore = ChosenPizzaState & ChosenPizzaActions
