import type { ChosenPizzaStore } from '../../../../lib/types/store'

export const getSetPizza = (state: ChosenPizzaStore) => {
    return state.setPizza
}
