'use client'
import { createContext, useContext, useRef, type ReactNode } from 'react'
import { useStore } from 'zustand'
import { createChosenPizzaStore } from '../chosen-pizza-store'
import type { ChosenPizzaStore } from '../../../lib/types/store'

export type ChosenPizzaStoreApi = ReturnType<typeof createChosenPizzaStore>

export const ChosenPizzaStoreContext = createContext<
    ChosenPizzaStoreApi | undefined
>(undefined)

export interface ChosenPizzaStoreProviderProps {
    children: ReactNode
}

export const ChosenPizzaStoreProvider = ({
    children
}: ChosenPizzaStoreProviderProps) => {
    const storeRef = useRef<ChosenPizzaStoreApi | null>(null)

    if (storeRef.current === null) {
        storeRef.current = createChosenPizzaStore()
    }

    return (
        <ChosenPizzaStoreContext value={storeRef.current}>
            {children}
        </ChosenPizzaStoreContext>
    )
}

export const useChosenPizzaStore = <T,>(
    selector: (store: ChosenPizzaStore) => T
): T => {
    const chosenPizzaStoreContext = useContext(ChosenPizzaStoreContext)

    if (!chosenPizzaStoreContext) {
        throw new Error(
            `usePizzasStore must be used within PizzasStoreProvider`
        )
    }

    return useStore(chosenPizzaStoreContext, selector)
}
