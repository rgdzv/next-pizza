import { isAxiosError } from 'axios'
import { fetchPizzasAPI } from '../../../api/fetchPizzasAPI'
import type { PizzasActions, PizzasStore } from '../../../lib/types/store'
import type { StateCreator } from 'zustand'

export const fetchPizzas: StateCreator<
    PizzasStore,
    [],
    [],
    Pick<PizzasActions, 'fetchPizzas'>
> = (set, get) => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    return {
        fetchPizzas: async () => {
            if (timeoutId !== null) {
                clearTimeout(timeoutId)
            }

            const {
                pizzas,
                page,
                perPage,
                pizzasLeftOnServer,
                searchValue,
                category,
                sortingObj
            } = get()

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
                    const currentPizzas = pizzas ?? []

                    const newPizzas =
                        page === 1 ? data : [...currentPizzas, ...data]

                    const hasMore = newPizzas.length < pizzasLeftOnServerUpdated

                    timeoutId = setTimeout(() => {
                        set({ isLoading: false })
                        timeoutId = null
                    }, 400)

                    return {
                        pizzas: newPizzas,
                        error: undefined,
                        hasMore: hasMore
                    }
                }, false)
            } catch (error) {
                if (timeoutId !== null) {
                    clearTimeout(timeoutId)
                    timeoutId = null
                }

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
    }
}
