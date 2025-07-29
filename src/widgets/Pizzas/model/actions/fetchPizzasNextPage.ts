import type { PizzasStore } from '../types/store'
import type { StateCreator } from 'zustand'

interface FetchPizzasNextPageAction {
    fetchPizzasNextPage: () => Promise<void>
}

export const createFetchPizzasNextPage: StateCreator<
    PizzasStore,
    [],
    [],
    FetchPizzasNextPageAction
> = (set, get) => ({
    fetchPizzasNextPage: async () => {
        const page = get().page + 1
        const fetchPizzas = get().fetchPizzas

        set({
            isLoading: true,
            page: page
        })

        await fetchPizzas()
    }
})
