import type { FiltersStore } from '../../../../lib/types/store'

export const getCategoryID = (state: FiltersStore) => {
    return state.categoryID
}
