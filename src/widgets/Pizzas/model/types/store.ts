import type { Pizza } from 'entities/PizzaCard/lib/types/pizza'

export interface PizzasState {
    pizzas: Pizza[] | []
    isLoading: boolean
    error: string | null
}

export interface PizzasActions {
    fetchPizzas: () => void
}

export type PizzasStore = PizzasState & PizzasActions
