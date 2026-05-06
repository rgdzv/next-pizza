import type { ChosenPizzaStore } from '../../../../lib/types/store'

export const getIngredients = (state: ChosenPizzaStore) => {
    return state.ingredients
}
