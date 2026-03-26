import type { ChosenPizzaStore } from '../../../../lib/types/store'

export const getPizza = (state: ChosenPizzaStore) => {
    return state.pizza
}
