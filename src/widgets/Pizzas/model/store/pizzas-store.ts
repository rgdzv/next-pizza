import { createStore } from 'zustand/vanilla'
import axios from 'axios'
import { devtools } from 'zustand/middleware'
import type { Pizza } from 'entities/PizzaCard/lib/types/pizza'
import type { PizzasState, PizzasStore } from '../types/store'

export const defaultInitState: PizzasState = {
    pizzas: undefined,
    isLoading: true,
    error: undefined,
    page: 1,
    limit: 8
}

export const createPizzasStore = (
    initState: PizzasState = defaultInitState
) => {
    return createStore<PizzasStore>()(
        devtools((set, get) => ({
            ...initState,
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
            },
            fetchPizzasNextPage: async () => {
                try {
                    set({
                        isLoading: true
                    })

                    const page = get().page + 1
                    const limit = get().limit
                    const pizzas = get().pizzas as Pizza[]

                    const { data } = await axios.get<Pizza[]>(
                        'https://686534cd5b5d8d0339803269.mockapi.io/pizzas',
                        {
                            params: {
                                page: page,
                                limit: limit
                            }
                        }
                    )

                    set({
                        pizzas: [...pizzas, ...data],
                        isLoading: false,
                        error: undefined
                    })
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
    )
}
