import type { PizzasStore } from '../../../../lib/types/store'

export const getSearchValue = (state: PizzasStore) => {
    return state.searchValue
}
