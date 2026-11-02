import type { ChosenPizzaStore } from '../../../../lib/types/store'

export const getFetchExtraIngredients = (state: ChosenPizzaStore) => {
    return state.fetchExtraIngredients
}
