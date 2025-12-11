import type { PizzasStore } from '../../../../lib/types/store'

export const getSetSearchValue = (state: PizzasStore) => {
    return state.setSearchValue
}
