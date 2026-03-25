import type { Pizza } from 'entities/PizzaCard'

export interface ChosenPizzaState {
    pizza: Pizza | undefined
    pizzaSize: string
    pizzaType: string
}

export interface ChosenPizzaActions {
    setPizzaSize: (newSize: string) => void
    setPizzaType: (newType: string) => void
}

export type ChosenPizzaStore = ChosenPizzaState & ChosenPizzaActions
