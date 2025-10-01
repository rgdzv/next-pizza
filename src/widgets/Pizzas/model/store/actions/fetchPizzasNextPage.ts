import type { PizzasActions, PizzasStore } from '../../../lib/types/store'
import type { StateCreator } from 'zustand'

export const fetchPizzasNextPage: StateCreator<
    PizzasStore,
    [],
    [],
    Pick<PizzasActions, 'fetchPizzasNextPage'>
> = (set, get) => ({
    fetchPizzasNextPage: async (categoryID: number) => {
        const { page, fetchPizzas } = get()

        set(
            {
                page: page + 1
            },
            false
        )

        await fetchPizzas(categoryID)
    }
})
