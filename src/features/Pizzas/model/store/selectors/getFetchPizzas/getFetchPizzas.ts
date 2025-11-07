import type { PizzasStore } from '../../../../lib/types/store'

export const getFetchPizzas = (state: PizzasStore) => {
    return state.fetchPizzas
}
