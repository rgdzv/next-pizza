import type { PizzasStore } from '../../../../lib/types/store'

export const getCategory = (state: PizzasStore) => {
    return state.category
}
