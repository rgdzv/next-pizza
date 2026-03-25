import type { PizzasStore } from '../../../../lib/types/store'

export const getPage = (state: PizzasStore) => {
    return state.page
}
