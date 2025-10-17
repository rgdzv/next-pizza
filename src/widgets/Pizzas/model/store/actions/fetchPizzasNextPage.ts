import type {
    FetchPizzasProps,
    PizzasActions,
    PizzasStore
} from '../../../lib/types/store'
import type { StateCreator } from 'zustand'

export const fetchPizzasNextPage: StateCreator<
    PizzasStore,
    [],
    [],
    Pick<PizzasActions, 'fetchPizzasNextPage'>
> = (set, get) => ({
    fetchPizzasNextPage: async (obj: FetchPizzasProps) => {
        const { fetchPizzas } = get()

        // set(
        //     {
        //         page: obj.page
        //     },
        //     false
        // )

        await fetchPizzas(obj)
    }
})
