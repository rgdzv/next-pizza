import axios, { isAxiosError } from 'axios'
import type { PizzasActions, PizzasStore } from '../../types/store'
import type { StateCreator } from 'zustand'
import type { Pizza } from 'entities/PizzaCard/lib/types/pizza'

export const createFetchPizzas: StateCreator<
    PizzasStore,
    [],
    [],
    Pick<PizzasActions, 'fetchPizzas'>
> = (set, get) => ({
    fetchPizzas: async () => {
        try {
            const { page, limit, totalCount, pizzas } = get()

            const { data } = await axios.get<Pizza[]>(
                'https://686534cd5b5d8d0339803269.mockapi.io/pizzas',
                {
                    params: {
                        page: page,
                        limit: limit
                    }
                }
            )

            set(() => {
                const newPizzas = pizzas ? [...pizzas, ...data] : data

                return {
                    pizzas: newPizzas,
                    isLoading: false,
                    error: undefined,
                    hasMore: newPizzas.length < totalCount
                }
            })
        } catch (error) {
            let errorMessage = 'An unexpected error occurred!'

            if (isAxiosError(error)) {
                errorMessage = error.message
            }

            set({
                pizzas: undefined,
                isLoading: false,
                error: errorMessage
            })
        }
    }
})
