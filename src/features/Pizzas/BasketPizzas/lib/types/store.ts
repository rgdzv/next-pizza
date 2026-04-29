import type { BasketPizza } from 'entities/BasketPizzaCard'

export interface BasketPizzaState {
    pizzasInBasket: BasketPizza[] | undefined
    totalPrice: number
}

export interface BasketPizzaActions {
    addPizzaToBasket: (pizza: BasketPizza) => void
    removePizzaFromBasket: (
        pizza: BasketPizza,
        removeImmediately?: boolean
    ) => void
    removaAllPizzas: () => void
}

export type BasketPizzaStore = BasketPizzaState & BasketPizzaActions
