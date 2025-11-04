import type { PizzasStore } from '../../../../lib/types/store'

export const getHasMore = (state: PizzasStore) => {
    return state.hasMore
}
