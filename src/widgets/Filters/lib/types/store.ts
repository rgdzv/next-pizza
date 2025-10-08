export interface SortingObj {
    name: string
    sortProperty: 'rating' | 'title'
    order: 'desc' | 'asc'
}

export interface FiltersState {
    categoryID: number
    sortingObj: SortingObj
}

export interface FiltersActions {
    setCategoryID: () => void
    setSortingObj: (obj: SortingObj) => void
}

export type FiltersStore = FiltersState & FiltersActions
