import type { ChosenPizzaStore } from '../../../../lib/types/store'

export const getSetPizzaSize = (state: ChosenPizzaStore) => {
    return state.setPizzaSize
}
