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
            pizzas,
            lastCategoryID,
            lastSortProperty,
            lastOrder,
            page: currentPage
        } = get()

        const { categoryID, sortProperty, order } = obj

        const isSameCategory = categoryID === lastCategoryID
        const isSameSorting =
            sortProperty === lastSortProperty && order === lastOrder

        const newPage = isSameCategory && isSameSorting ? currentPage : 1

        set(
            {
                page: newPage,
                isLoading: true
            },
            false
        )

        try {
            const { data } = await fetchPizzasAPI({
                page: newPage,
                limit,
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
                const newPizzas =
                    isSameCategory && isSameSorting && pizzas
                        ? [...pizzas, ...data]
                        : data

                return {
                    pizzas: newPizzas,
                    isLoading: false,
                    error: undefined,
                    hasMore: data.length === limit, // change
                    lastCategoryID: categoryID,
                    lastSortProperty: sortProperty,
                    lastOrder: order
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
