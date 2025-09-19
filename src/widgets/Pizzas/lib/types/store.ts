import type { Pizza } from 'entities/PizzaCard'

export interface PizzasState {
    pizzas: Pizza[] | undefined
    isLoading: boolean
    error: string | undefined
    page: number
    limit: number
    hasMore: boolean
    totalCount: number
    inited: boolean
}

export interface PizzasActions {
    fetchPizzas: (categoryID: number) => Promise<void>
    fetchPizzasNextPage: (categoryID: number) => Promise<void>
}

export type PizzasStore = PizzasState & PizzasActions
