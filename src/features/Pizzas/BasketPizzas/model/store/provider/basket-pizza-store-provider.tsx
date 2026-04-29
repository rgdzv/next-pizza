'use client'
import { createContext, useContext, useRef, type ReactNode } from 'react'
import { useStore } from 'zustand'
import { createBasketPizzaStore } from '../basket-pizza-store'
import type { BasketPizzaStore } from '../../../lib/types/store'

export type BasketPizzaStoreApi = ReturnType<typeof createBasketPizzaStore>

export const BasketPizzaStoreContext = createContext<
    BasketPizzaStoreApi | undefined
>(undefined)

export interface BasketPizzaStoreProviderProps {
    children: ReactNode
}

export const BasketPizzaStoreProvider = ({
    children
}: BasketPizzaStoreProviderProps) => {
    const storeRef = useRef<BasketPizzaStoreApi | null>(null)

    if (storeRef.current === null) {
        storeRef.current = createBasketPizzaStore()
    }

    return (
        <BasketPizzaStoreContext value={storeRef.current}>
            {children}
        </BasketPizzaStoreContext>
    )
}

export const useBasketPizzaStore = <T,>(
    selector: (store: BasketPizzaStore) => T
): T => {
    const basketPizzaStoreContext = useContext(BasketPizzaStoreContext)

    if (!basketPizzaStoreContext) {
        throw new Error(
            `useBasketPizzaStore must be used within BasketPizzaStoreProvider`
        )
    }

    return useStore(basketPizzaStoreContext, selector)
}
