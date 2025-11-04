import type { PizzasStore } from '../../../../lib/types/store'

export const getIsLoading = (state: PizzasStore) => {
    return state.isLoading
}
