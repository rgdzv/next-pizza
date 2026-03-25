import type { ChosenPizzaStore } from '../../../../lib/types/store'

export const getPizzaType = (state: ChosenPizzaStore) => {
    return state.pizzaType
}
