import type { ChosenPizzaStore } from '../../../../lib/types/store'

export const getPizzaIngredientPrice = (state: ChosenPizzaStore) => {
    return state.pizzaIngredientPrice
}
