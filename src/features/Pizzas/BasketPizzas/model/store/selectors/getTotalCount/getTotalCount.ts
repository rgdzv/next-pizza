import type { BasketPizzaStore } from '../../../../lib/types/store'

export const getTotalCount = (state: BasketPizzaStore) => {
    return state.totalCount
}
