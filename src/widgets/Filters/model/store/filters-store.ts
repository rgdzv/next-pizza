import { createStore } from 'zustand'
import { devtools } from 'zustand/middleware'
import type {
    FiltersState,
    FiltersStore,
    StateSortingObj
} from '../../lib/types/store'

export const defaultInitState: FiltersState = {
    categoryID: 0,
    sortingObj: {
        name: 'алфавиту',
        sortProperty: 'title',
        order: 'asc'
    }
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
                },
                setSortingObj: (obj: StateSortingObj) => {
                    set(() => ({
                        sortingObj: obj
                    }))
                }
            }),
            { name: 'Filters' }
        )
    )
}
