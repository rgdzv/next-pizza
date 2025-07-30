'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'
import { createPizzasStore } from '../pizzas-store'
import type { PizzasStore } from '../../types/store'

export type PizzasStoreApi = ReturnType<typeof createPizzasStore>

export const PizzasStoreContext = createContext<PizzasStoreApi | undefined>(
    undefined
)

export interface PizzasStoreProviderProps {
    children: ReactNode
}

export const PizzasStoreProvider = ({ children }: PizzasStoreProviderProps) => {
    const storeRef = useRef<PizzasStoreApi | null>(null)

    if (storeRef.current === null) {
        storeRef.current = createPizzasStore()
    }

    return (
        <PizzasStoreContext.Provider value={storeRef.current}>
            {children}
        </PizzasStoreContext.Provider>
    )
}

export const usePizzasStore = <T,>(selector: (store: PizzasStore) => T): T => {
    const pizzasStoreContext = useContext(PizzasStoreContext)

    if (!pizzasStoreContext) {
        throw new Error(
            `usePizzasStore must be used within PizzasStoreProvider`
        )
    }

    return useStore(pizzasStoreContext, selector)
}
