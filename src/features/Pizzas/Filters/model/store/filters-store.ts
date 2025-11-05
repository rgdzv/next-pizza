import { createStore } from 'zustand'
import { devtools } from 'zustand/middleware'
import type {
    FiltersState,
    FiltersStore,
    StateSortingObj
} from '../lib/types/store'

export const defaultInitState: FiltersState = {
    searchValue: '',
    category: 0,
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
                setSearchValue: (value: string) => {
                    set(() => ({ searchValue: value, category: 0 }))
                },
                setCategory: (id: number) => {
                    set(() => ({ category: id, searchValue: '' }))
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
