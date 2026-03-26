import type { Pizza, PizzaSizeKeys, PizzaTypeKeys } from 'entities/PizzaCard'

export interface ChosenPizzaState {
    pizza: Pizza | undefined
    pizzaSize: PizzaSizeKeys
    pizzaType: PizzaTypeKeys
}

export interface ChosenPizzaActions {
    setPizza: (newPizza: Pizza) => void
    setPizzaSize: (newSize: PizzaSizeKeys) => void
    setPizzaType: (newType: PizzaTypeKeys) => void
}

export type ChosenPizzaStore = ChosenPizzaState & ChosenPizzaActions
