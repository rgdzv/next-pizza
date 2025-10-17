import type { Pizza } from 'entities/PizzaCard'

export interface PizzasState {
    pizzas: Pizza[] | undefined
    isLoading: boolean
    error: string | undefined
    limit: number
    hasMore: boolean
    totalCount: number
}

export interface FetchPizzasProps {
    page: number
    searchValue: string
    categoryID: number
    sortProperty: 'rating' | 'title'
    order: 'desc' | 'asc'
    setPage?: (page: number) => void
}

export interface PizzasActions {
    fetchPizzas: (obj: FetchPizzasProps) => Promise<void>
    fetchPizzasNextPage: (obj: FetchPizzasProps) => Promise<void>
}

export type PizzasStore = PizzasState & PizzasActions
