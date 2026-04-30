import type { BasketPizzaStore } from '../../../../lib/types/store'

export const getRemoveAllPizzas = (state: BasketPizzaStore) => {
    return state.removaAllPizzas
}
