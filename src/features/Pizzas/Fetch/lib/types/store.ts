import type { Pizza } from 'entities/PizzaCard'

export interface PizzasState {
    pizzas: Pizza[] | undefined
    isLoading: boolean
    error: string | undefined
    page: number
    perPage: number
    hasMore: boolean
    pizzasLeftOnServer: number
    lastSearchValue: string
    lastCategory: number
    lastSortProperty: string
    lastOrder: string
}

export interface FetchPizzasProps {
    searchValue: string
    category: number
    sortProperty: 'rating' | 'title'
    order: 'desc' | 'asc'
}

export interface PizzasActions {
    fetchPizzas: (obj: FetchPizzasProps) => Promise<void>
    fetchPizzasNextPage: (obj: FetchPizzasProps) => Promise<void>
}

export type PizzasStore = PizzasState & PizzasActions
