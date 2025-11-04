import type { FiltersStore } from '../../../../lib/types/store'

export const getSortingObj = (state: FiltersStore) => {
    return state.sortingObj
}
