export interface FiltersState {
    categoryID: number
}

export interface FiltersActions {
    setCategoryID: () => void
}

export type FiltersStore = FiltersState & FiltersActions
