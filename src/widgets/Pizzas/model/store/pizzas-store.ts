import { createStore } from 'zustand/vanilla'
import { devtools } from 'zustand/middleware'
import { createFetchPizzas } from '../actions/fetchPizzas'
import { createFetchPizzasNextPage } from '../actions/fetchPizzasNextPage'
import type { PizzasState, PizzasStore } from '../types/store'

export const defaultInitState: PizzasState = {
    pizzas: undefined,
    isLoading: true,
    error: undefined,
    page: 1,
    limit: 8,
    hasMore: true,
    totalCount: 16
}

export const createPizzasStore = (
    initState: PizzasState = defaultInitState
) => {
    return createStore<PizzasStore>()(
        devtools((set, get, api) => ({
            ...initState,
            ...createFetchPizzas(set, get, api),
            ...createFetchPizzasNextPage(set, get, api)
        }))
    )
}
