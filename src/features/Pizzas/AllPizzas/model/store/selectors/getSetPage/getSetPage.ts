import type { PizzasStore } from '../../../../lib/types/store'

export const getSetPage = (state: PizzasStore) => {
    return state.setPage
}
