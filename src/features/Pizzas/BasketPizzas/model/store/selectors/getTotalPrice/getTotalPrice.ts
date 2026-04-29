import type { BasketPizzaStore } from '../../../../lib/types/store'

export const getTotalPrice = (state: BasketPizzaStore) => {
    return state.totalPrice
}
