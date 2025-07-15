import type { PizzasStore } from '../../types/store'

export const getIsLoading = (state: PizzasStore) => {
    return state.isLoading
}
