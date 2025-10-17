import { createStore } from 'zustand'
import { devtools } from 'zustand/middleware'
import type {
    FiltersState,
    FiltersStore,
    StateSortingObj
} from '../../lib/types/store'

export const defaultInitState: FiltersState = {
    page: 1,
    searchValue: '',
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
                setPage: (page: number) => {
                    set(() => ({ page }))
                },
                setSearchValue: (value: string) => {
                    set(() => ({ searchValue: value, categoryID: 0 }))
                },
                setCategoryID: (id: number) => {
                    set(() => ({ categoryID: id, searchValue: '' }))
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
