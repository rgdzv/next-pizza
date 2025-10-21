export interface StateSortingObj {
    name: string
    sortProperty: 'rating' | 'title'
    order: 'desc' | 'asc'
}

export interface FiltersState {
    searchValue: string
    categoryID: number
    sortingObj: StateSortingObj
}

export interface FiltersActions {
    setSearchValue: (value: string) => void
    setCategoryID: () => void
    setSortingObj: (obj: StateSortingObj) => void
}

export type FiltersStore = FiltersState & FiltersActions
