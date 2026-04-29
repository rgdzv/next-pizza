import type { BasketPizzaStore } from '../../../../lib/types/store'

export const getPizzasInBasket = (state: BasketPizzaStore) => {
    return state.pizzasInBasket
}
