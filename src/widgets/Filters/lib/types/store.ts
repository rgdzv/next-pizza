export interface StateSortingObj {
    name: string
    sortProperty: 'rating' | 'title'
    order: 'desc' | 'asc'
}

export interface FiltersState {
    categoryID: number
    sortingObj: StateSortingObj
}

export interface FiltersActions {
    setCategoryID: () => void
    setSortingObj: (obj: StateSortingObj) => void
}

export type FiltersStore = FiltersState & FiltersActions
