import type { Pizza } from 'entities/PizzaCard'

export interface StateSortingObj {
    name: string
    sortProperty: 'rating' | 'title'
    order: 'desc' | 'asc'
}

export interface PizzasState {
    pizzas: Pizza[] | undefined
    isLoading: boolean
    error: string | undefined
    page: number
    perPage: number
    hasMore: boolean
    pizzasLeftOnServer: number
    searchValue: string
    category: number
    sortingObj: StateSortingObj
    lastSearchValue: string
    lastCategory: number
    lastSortProperty: string
    lastOrder: string
}

export interface PizzasActions {
    fetchPizzas: () => Promise<void>
    fetchPizzasNextPage: () => Promise<void>
    setPage: (newPage: number) => void
    setSearchValue: (value: string) => void
    setCategory: (id: number) => void
    setSortingObj: (obj: StateSortingObj) => void
}

export type PizzasStore = PizzasState & PizzasActions
