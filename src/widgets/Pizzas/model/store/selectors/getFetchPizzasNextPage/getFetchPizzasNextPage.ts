import type { PizzasStore } from '../../../../lib/types/store'

export const getFetchPizzasNextPage = (state: PizzasStore) => {
    return state.fetchPizzasNextPage
}
