import type { FiltersStore } from '../../../../lib/types/store'

export const getSetSearchValue = (state: FiltersStore) => {
    return state.setSearchValue
}
