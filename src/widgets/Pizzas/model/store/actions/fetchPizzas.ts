import { isAxiosError } from 'axios'
import { axiosAPI } from 'shared/api'
import type { Pizza } from 'entities/PizzaCard'
import type { PizzasActions, PizzasStore } from '../../../lib/types/store'
import type { StateCreator } from 'zustand'

export const createFetchPizzas: StateCreator<
    PizzasStore,
    [],
    [],
    Pick<PizzasActions, 'fetchPizzas'>
> = (set, get) => ({
    fetchPizzas: async () => {
        try {
            const { page, limit, totalCount, pizzas } = get()

            const { data } = await axiosAPI.get<Pizza[]>('/pizzas', {
                params: {
                    page: page,
                    limit: limit
                }
            })

            set(() => {
                const newPizzas = pizzas ? [...pizzas, ...data] : data

                return {
                    pizzas: newPizzas,
                    isLoading: false,
                    error: undefined,
                    hasMore: newPizzas.length < totalCount,
                    inited: true
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
