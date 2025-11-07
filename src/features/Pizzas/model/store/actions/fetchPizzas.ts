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
    fetchPizzas: async () => {
        const {
            pizzas,
            page,
            perPage,
            pizzasLeftOnServer,
            searchValue,
            category,
            sortingObj,
            lastSearchValue,
            lastCategory,
            lastSortProperty,
            lastOrder
        } = get()

        const equalCondition =
            searchValue === lastSearchValue &&
            category === lastCategory &&
            sortingObj.sortProperty === lastSortProperty &&
            sortingObj.order === lastOrder

        set(
            {
                isLoading: true
            },
            false
        )

        try {
            const {
                data: { data, items }
            } = await fetchPizzasAPI({
                page: page,
                perPage: perPage,
                search: searchValue,
                category: category,
                sort: sortingObj.sortProperty,
                order: sortingObj.order
            })

            if (items !== pizzasLeftOnServer) {
                set(
                    {
                        pizzasLeftOnServer: items
                    },
                    false
                )
            }

            const pizzasLeftOnServerUpdated = get().pizzasLeftOnServer

            set(() => {
                const newPizzas = searchValue
                    ? data
                    : equalCondition && pizzas
                      ? [...pizzas, ...data]
                      : data

                const hasMore = newPizzas.length < pizzasLeftOnServerUpdated

                return {
                    pizzas: newPizzas,
                    isLoading: false,
                    error: undefined,
                    hasMore: hasMore,
                    lastSearchValue: searchValue,
                    lastCategory: category,
                    lastSortProperty: sortingObj.sortProperty,
                    lastOrder: sortingObj.order
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
