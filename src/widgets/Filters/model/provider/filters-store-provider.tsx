'use client'
import { createContext, useContext, useRef } from 'react'
import { useStore } from 'zustand'
import { createFiltersStore } from '../filters-store'
import type { FiltersStore } from '../../lib/types/store'
import type { ReactNode } from 'react'

export type FiltersStoreApi = ReturnType<typeof createFiltersStore>

export const FiltersStoreContext = createContext<FiltersStoreApi | undefined>(
    undefined
)

export interface FiltersStoreProviderProps {
    children: ReactNode
}

export const FiltersStoreProvider = ({
    children
}: FiltersStoreProviderProps) => {
    const storeRef = useRef<FiltersStoreApi | null>(null)

    if (storeRef.current === null) {
        storeRef.current = createFiltersStore()
    }

    return (
        <FiltersStoreContext value={storeRef.current}>
            {children}
        </FiltersStoreContext>
    )
}

export const useFiltersStore = <T,>(
    selector: (store: FiltersStore) => T
): T => {
    const filtersStoreContext = useContext(FiltersStoreContext)

    if (!filtersStoreContext) {
        throw new Error(
            `useFiltersStore must be used within FiltersStoreProvider`
        )
    }

    return useStore(filtersStoreContext, selector)
}
