import { createStore } from 'zustand'
import { devtools } from 'zustand/middleware'
import { fetchPizzas } from './actions/fetchPizzas'
import { fetchPizzasNextPage } from './actions/fetchPizzasNextPage'
import type {
    PizzasState,
    PizzasStore,
    StateSortingObj
} from '../../lib/types/store'

export const defaultInitState: PizzasState = {
    pizzas: undefined,
    isLoading: true,
    error: undefined,
    page: 1,
    perPage: 8,
    hasMore: true,
    pizzasLeftOnServer: 0,
    searchValue: '',
    category: 0,
    sortingObj: {
        name: 'алфавиту',
        sortProperty: 'title',
        order: 'asc'
    }
}

export const createPizzasStore = (
    initState: PizzasState = defaultInitState
) => {
    return createStore<PizzasStore>()(
        devtools(
            (set, get, store) => ({
                ...initState,
                ...fetchPizzas(set, get, store),
                ...fetchPizzasNextPage(set, get, store),
                setPage: (newPage: number) => {
                    set(() => ({ page: newPage }))
                },
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
            { name: 'Pizzas' }
        )
    )
}
