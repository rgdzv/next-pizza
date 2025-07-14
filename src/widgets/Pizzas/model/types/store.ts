import type { Pizza } from 'entities/PizzaCard/lib/types/pizza'

export interface PizzasState {
    pizzas: Pizza[] | undefined
    isLoading: boolean
    error: string | undefined
    page: number
    limit: number
}

export interface PizzasActions {
    fetchPizzas: () => Promise<void>
    fetchPizzasNextPage: () => Promise<void>
}

export type PizzasStore = PizzasState & PizzasActions
