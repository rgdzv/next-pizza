import { isAxiosError } from 'axios'
import { fetchPizzasAPI } from '../../../api/fetchPizzasAPI'
import type {
    PizzasActions,
    PizzasStore,
    FetchPizzasProps
} from '../../../lib/types/store'
import type { StateCreator } from 'zustand'

export const fetchPizzas: StateCreator<
    PizzasStore,
    [],
    [],
    Pick<PizzasActions, 'fetchPizzas'>
> = (set, get) => ({
    fetchPizzas: async (obj: FetchPizzasProps) => {
        const {
            limit,
            // totalCount,
            pizzas
        } = get()
        const { page, categoryID, sortProperty, order, searchValue } = obj

        set(
            {
                isLoading: true
            },
            false
        )

        try {
            const { data } = await fetchPizzasAPI({
                page,
                limit,
                search: searchValue,
                categoryID,
                sortBy: sortProperty,
                order: order
            })

            // const total = headers['x-total-count']

            // if (Number(total) !== totalCount) {
            //     set(
            //         {
            //             totalCount: total
            //         },
            //         false
            //     )
            // }

            set(() => {
                const newPizzas = pizzas ? [...pizzas, ...data] : data

                return {
                    pizzas: newPizzas,
                    isLoading: false,
                    error: undefined,
                    hasMore: data.length === limit // change
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
