import { createStore } from 'zustand/vanilla'
import axios from 'axios'
import type { Pizza } from 'entities/PizzaCard/lib/types/pizza'
import type { PizzasState, PizzasStore } from '../types/store'

export const defaultInitState: PizzasState = {
    pizzas: undefined,
    isLoading: true,
    error: undefined
}

export const createPizzasStore = (
    initState: PizzasState = defaultInitState
) => {
    return createStore<PizzasStore>()((set) => ({
        ...initState,
        fetchPizzas: async () => {
            try {
                // set({ error: 'Error' })

                throw new Error('Error!')
                const { data } = await axios.get<Pizza[]>(
                    'https://686534cd5b5d8d0339803269.mockapi.io/pizzas'
                )

                set({ pizzas: data, isLoading: false, error: undefined })
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    set({
                        pizzas: undefined,
                        isLoading: false,
                        error: error.message
                    })
                } else {
                    set({
                        pizzas: undefined,
                        isLoading: false,
                        error: 'An unexpected error occurred!'
                    })
                }
            }
        }
    }))
}
