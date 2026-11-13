import type { ChosenPizzaStore } from '../../../../lib/types/store'

export const getResetPizzaConfiguration = (state: ChosenPizzaStore) => {
    return state.resetPizzaConfiguration
}
