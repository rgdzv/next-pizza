import { isAxiosError } from 'axios'
import { axiosAPI } from 'shared/api'
import type { Pizza } from 'entities/PizzaCard'
import type { PizzasActions, PizzasStore } from '../../../lib/types/store'
import type { StateCreator } from 'zustand'

export const fetchPizzas: StateCreator<
    PizzasStore,
    [],
    [],
    Pick<PizzasActions, 'fetchPizzas'>
> = (set, get) => ({
    fetchPizzas: async (categoryID: number) => {
        const { page, limit, totalCount, pizzas, lastCategoryID } = get()

        set({
            page: categoryID === lastCategoryID ? page : 1
        })

        try {
            const { data } = await axiosAPI.get<Pizza[]>('/pizzas', {
                params: {
                    page,
                    limit,
                    category: categoryID > 0 ? categoryID : null
                }
            })

            set(() => {
                const newPizzas =
                    categoryID === lastCategoryID && pizzas
                        ? [...pizzas, ...data]
                        : data

                return {
                    pizzas: newPizzas,
                    isLoading: false,
                    error: undefined,
                    hasMore: newPizzas.length < totalCount,
                    lastCategoryID: categoryID
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
