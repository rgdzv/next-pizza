import type { ChosenPizzaStore } from '../../../../lib/types/store'

export const getSetIngredient = (state: ChosenPizzaStore) => {
    return state.setIngredient
}
