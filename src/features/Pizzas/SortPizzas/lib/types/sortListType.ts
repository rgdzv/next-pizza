export interface SortListType {
    name: string
    sortProperty: 'rating' | 'title'
}

export type SortListObjProps = SortListType & {
    order: 'asc' | 'desc'
}
