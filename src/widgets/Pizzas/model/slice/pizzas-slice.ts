import { createStore } from 'zustand/vanilla'
import type { PizzasState, PizzasStore } from '../types/store'

export const defaultInitState: PizzasStore = {
    pizzas: [],
    isLoading: false,
    error: null,
    fetchPizzas: () => ({})
}

export const createCounterStore = (
    initState: PizzasState = defaultInitState
) => {
    return createStore<PizzasStore>()(() => ({
        ...initState,
        fetchPizzas: () => {
            // set((state) => ({}))
        }
    }))
}
