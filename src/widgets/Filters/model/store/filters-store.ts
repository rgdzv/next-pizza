import { createStore } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { FiltersState, FiltersStore } from '../../lib/types/store'

export const defaultInitState: FiltersState = {
    categoryID: 0
}

export const createFiltersStore = (
    initState: FiltersState = defaultInitState
) => {
    return createStore<FiltersStore>()(
        devtools(
            (set) => ({
                ...initState,
                setCategoryID: (id: number) => {
                    set(() => ({ categoryID: id }))
                }
            }),
            { name: 'Filters' }
        )
    )
}
