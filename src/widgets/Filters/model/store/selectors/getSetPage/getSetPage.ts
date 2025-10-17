import type { FiltersStore } from '../../../../lib/types/store'

export const getSetPage = (state: FiltersStore) => {
    return state.setPage
}
