import type { BasketPizzaStore } from '../../../../lib/types/store'

export const getRemovePizzaFromBasket = (state: BasketPizzaStore) => {
    return state.removePizzaFromBasket
}
