import axios from 'axios'
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
            const page = get().page
            const limit = get().limit

            const { data } = await axios.get<Pizza[]>(
                'https://686534cd5b5d8d0339803269.mockapi.io/pizzas',
                {
                    params: {
                        page: page,
                        limit: limit
                    }
                }
            )

            set((state) => ({
                pizzas: state.pizzas ? [...state.pizzas, ...data] : data,
                isLoading: false,
                error: undefined
            }))

            set((state) => ({
                hasMore: state.pizzas
                    ? state.pizzas.length < state.totalCount
                    : true
            }))
        } catch (error) {
            if (axios.isAxiosError(error)) {
                set({
                    pizzas: undefined,
                    isLoading: false,
                    error: error.message
                })
            }

            set({
                pizzas: undefined,
                isLoading: false,
                error: 'An unexpected error occurred!'
            })
        }
    }
})
