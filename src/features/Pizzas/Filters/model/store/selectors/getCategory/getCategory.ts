import type { FiltersStore } from '../../../../lib/types/store'

export const getCategory = (state: FiltersStore) => {
    return state.category
}
