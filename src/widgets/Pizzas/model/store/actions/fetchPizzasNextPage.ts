import { isAxiosError } from 'axios'
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
                isLoading: true,
                page: page + 1
            },
            false
        )

        try {
            await fetchPizzas(categoryID)
        } catch (error) {
            let errorMessage = 'An unexpected error occurred!'

            if (isAxiosError(error)) {
                errorMessage = error.message
            }

            set(
                {
                    pizzas: undefined,
                    isLoading: false,
                    error: errorMessage
                },
                false
            )
        }
    }
})
