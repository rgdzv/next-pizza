import { isAxiosError } from 'axios'
import { fetchPizzasAPI } from '../../../api/fetchPizzasAPI'
import type { PizzasActions, PizzasStore } from '../../../lib/types/store'
import type { StateCreator } from 'zustand'

export const fetchPizzas: StateCreator<
    PizzasStore,
    [],
    [],
    Pick<PizzasActions, 'fetchPizzas'>
> = (set, get) => ({
    fetchPizzas: async (categoryID: number) => {
        const {
            limit,
            totalCount,
            pizzas,
            lastCategoryID,
            page: currentPage
        } = get()
        const isSameCategory = categoryID === lastCategoryID
        const newPage = isSameCategory ? currentPage : 1

        set(
            {
                page: newPage
            },
            false
        )

        try {
            const { data } = await fetchPizzasAPI({
                page: newPage,
                limit,
                categoryID
            })

            set(() => {
                const newPizzas =
                    isSameCategory && pizzas ? [...pizzas, ...data] : data

                return {
                    pizzas: newPizzas,
                    isLoading: false,
                    error: undefined,
                    hasMore: newPizzas.length < totalCount,
                    lastCategoryID: categoryID
                }
            }, false)
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
