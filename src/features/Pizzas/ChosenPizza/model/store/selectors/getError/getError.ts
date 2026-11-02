import type { ChosenPizzaStore } from '../../../../lib/types/store'

export const getError = (state: ChosenPizzaStore) => {
    return state.error
}
