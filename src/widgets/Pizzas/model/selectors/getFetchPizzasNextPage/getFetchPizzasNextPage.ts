import type { PizzasStore } from '../../types/store'

export const getFetchPizzasNextPage = (state: PizzasStore) => {
    return state.fetchPizzasNextPage
}
