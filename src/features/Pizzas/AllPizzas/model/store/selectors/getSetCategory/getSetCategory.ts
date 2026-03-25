import type { PizzasStore } from '../../../../lib/types/store'

export const getSetCategory = (state: PizzasStore) => {
    return state.setCategory
}
