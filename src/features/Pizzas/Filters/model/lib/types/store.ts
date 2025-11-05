export interface StateSortingObj {
    name: string
    sortProperty: 'rating' | 'title'
    order: 'desc' | 'asc'
}

export interface FiltersState {
    searchValue: string
    category: number
    sortingObj: StateSortingObj
}

export interface FiltersActions {
    setSearchValue: (value: string) => void
    setCategory: (id: number) => void
    setSortingObj: (obj: StateSortingObj) => void
}

export type FiltersStore = FiltersState & FiltersActions
