import type { PizzasActions, PizzasStore } from '../../types/store'
import type { StateCreator } from 'zustand'

export const createFetchPizzasNextPage: StateCreator<
    PizzasStore,
    [],
    [],
    Pick<PizzasActions, 'fetchPizzasNextPage'>
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
