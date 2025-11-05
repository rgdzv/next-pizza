import type { FiltersStore } from '../../../lib/types/store'

export const getSearchValue = (state: FiltersStore) => {
    return state.searchValue
}
