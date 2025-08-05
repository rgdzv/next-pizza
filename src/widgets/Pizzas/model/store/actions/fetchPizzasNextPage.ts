import type { PizzasActions, PizzasStore } from '../../types/store'
import type { StateCreator } from 'zustand'

export const createFetchPizzasNextPage: StateCreator<
    PizzasStore,
    [],
    [],
    Pick<PizzasActions, 'fetchPizzasNextPage'>
> = (set, get) => ({
    fetchPizzasNextPage: async () => {
        const { page, fetchPizzas } = get()

        set({
            isLoading: true,
            page: page + 1
        })

        await fetchPizzas()
    }
})
