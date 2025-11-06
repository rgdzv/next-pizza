import { createStore } from 'zustand/vanilla'
import { devtools } from 'zustand/middleware'
import { fetchPizzas } from './actions/fetchPizzas'
import { fetchPizzasNextPage } from './actions/fetchPizzasNextPage'
import type { PizzasState, PizzasStore } from '../../lib/types/store'

export const defaultInitState: PizzasState = {
    pizzas: undefined,
    isLoading: true,
    error: undefined,
    page: 1,
    perPage: 8,
    hasMore: true,
    pizzasLeftOnServer: 0,
    lastSearchValue: '',
    lastCategory: 0,
    lastSortProperty: 'title',
    lastOrder: 'asc'
}

export const createPizzasStore = (
    initState: PizzasState = defaultInitState
) => {
    return createStore<PizzasStore>()(
        devtools(
            (set, get, store) => ({
                ...initState,
                ...fetchPizzas(set, get, store),
                ...fetchPizzasNextPage(set, get, store)
            }),
            { name: 'Pizzas' }
        )
    )
}
