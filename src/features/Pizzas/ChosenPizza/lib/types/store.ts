import type {
    ExtraIngredient,
    Pizza,
    PizzaSize,
    PizzaType
} from 'entities/PizzaCard'

export interface ChosenPizzaState {
    pizza: Pizza | undefined
    pizzaSize: PizzaSize
    pizzaType: PizzaType
    ingredients: string[]
    pizzaIngredientPrice: number
    extraIngredients: ExtraIngredient[] | undefined
    isAddonsLoading: boolean
    error: string | undefined
}

export interface ChosenPizzaActions {
    setPizza: (newPizza: Pizza) => void
    setPizzaSize: (newSize: PizzaSize) => void
    setPizzaType: (newType: PizzaType) => void
    setIngredient: (ingName: string | null) => void
    fetchExtraIngredients: () => Promise<void>
}

export type ChosenPizzaStore = ChosenPizzaState & ChosenPizzaActions
