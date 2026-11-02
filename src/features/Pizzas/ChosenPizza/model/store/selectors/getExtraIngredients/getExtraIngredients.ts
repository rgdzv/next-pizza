import type { ChosenPizzaStore } from '../../../../lib/types/store'

export const getExtraIngredients = (state: ChosenPizzaStore) => {
    return state.extraIngredients
}
