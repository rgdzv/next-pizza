import type { ChosenPizzaStore } from '../../../../lib/types/store'

export const getSetPizzaType = (state: ChosenPizzaStore) => {
    return state.setPizzaType
}
