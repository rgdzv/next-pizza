import type { PizzasStore } from '../../../types/store'

export const getError = (state: PizzasStore) => {
    return state.error
}
