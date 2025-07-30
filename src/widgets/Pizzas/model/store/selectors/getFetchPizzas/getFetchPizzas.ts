import type { PizzasStore } from '../../../types/store'

export const getFetchPizzas = (state: PizzasStore) => {
    return state.fetchPizzas
}
