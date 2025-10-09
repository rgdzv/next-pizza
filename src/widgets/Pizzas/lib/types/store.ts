import type { Pizza } from 'entities/PizzaCard'

export interface PizzasState {
    pizzas: Pizza[] | undefined
    isLoading: boolean
    error: string | undefined
    page: number
    limit: number
    hasMore: boolean
    totalCount: number
    lastCategoryID: number
    lastSortProperty: string
    lastOrder: string
}

export interface FetchPizzasProps {
    categoryID: number
    sortProperty: 'rating' | 'title'
    order: 'desc' | 'asc'
}

export interface PizzasActions {
    fetchPizzas: (obj: FetchPizzasProps) => Promise<void>
    fetchPizzasNextPage: (obj: FetchPizzasProps) => Promise<void>
}

export type PizzasStore = PizzasState & PizzasActions
