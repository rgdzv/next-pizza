import type { ChosenPizzaStore } from '../../../../lib/types/store'

export const getPizzaSize = (state: ChosenPizzaStore) => {
    return state.pizzaSize
}
