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
            page,
            perPage,
            itemsOnServerLeft,
            pizzas,
            lastSearchValue,
            lastCategoryID,
            lastSortProperty,
            lastOrder
        } = get()
        const { categoryID, sortProperty, order, searchValue } = obj

        const equalCondition =
            searchValue === lastSearchValue &&
            categoryID === lastCategoryID &&
            sortProperty === lastSortProperty &&
            order === lastOrder

        const newPage = equalCondition ? page : 1

        set(
            {
                page: newPage,
                isLoading: true
            },
            false
        )

        try {
            const {
                data: { data, items }
            } = await fetchPizzasAPI({
                page: newPage,
                perPage,
                search: searchValue,
                categoryID,
                sort: sortProperty,
                order: order
            })

            if (items !== itemsOnServerLeft) {
                set(
                    {
                        itemsOnServerLeft: items
                    },
                    false
                )
            }

            set(() => {
                const newPizzas = searchValue
                    ? data
                    : equalCondition && pizzas
                      ? [...pizzas, ...data]
                      : data

                const hasMore = newPizzas.length < get().itemsOnServerLeft

                return {
                    pizzas: newPizzas,
                    isLoading: false,
                    error: undefined,
                    hasMore: hasMore,
                    lastSearchValue: searchValue,
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
