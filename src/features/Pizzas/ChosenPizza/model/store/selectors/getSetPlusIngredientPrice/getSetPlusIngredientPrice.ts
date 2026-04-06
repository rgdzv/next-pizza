import type { ChosenPizzaStore } from '../../../../lib/types/store'

export const getSetPlusIngredientPrice = (state: ChosenPizzaStore) => {
    return state.setPlusIngredientPrice
}
