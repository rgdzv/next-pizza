import type { PizzasStore } from '../../../../lib/types/store'

export const getError = (state: PizzasStore) => {
    return state.error
}
