import type { FiltersStore } from '../../../../lib/types/store'

export const getSetCategoryID = (state: FiltersStore) => {
    return state.setCategoryID
}
