export interface StateSortingObj {
    name: string
    sortProperty: 'rating' | 'title'
    order: 'desc' | 'asc'
}

export interface FiltersState {
    page: number
    searchValue: string
    categoryID: number
    sortingObj: StateSortingObj
}

export interface FiltersActions {
    setPage: (page: number) => void
    setSearchValue: (value: string) => void
    setCategoryID: () => void
    setSortingObj: (obj: StateSortingObj) => void
}

export type FiltersStore = FiltersState & FiltersActions
