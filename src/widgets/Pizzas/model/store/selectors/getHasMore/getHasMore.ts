import type { PizzasStore } from '../../../types/store'

export const getHasMore = (state: PizzasStore) => {
    return state.hasMore
}
