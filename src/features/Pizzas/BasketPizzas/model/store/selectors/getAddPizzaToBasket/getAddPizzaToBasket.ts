import type { BasketPizzaStore } from '../../../../lib/types/store'

export const getAddPizzaToBasket = (state: BasketPizzaStore) => {
    return state.addPizzaToBasket
}
