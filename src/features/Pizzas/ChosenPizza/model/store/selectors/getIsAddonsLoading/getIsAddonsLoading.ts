import type { ChosenPizzaStore } from '../../../../lib/types/store'

export const getIsAddonsLoading = (state: ChosenPizzaStore) => {
    return state.isAddonsLoading
}
