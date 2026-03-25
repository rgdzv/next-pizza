import { devtools } from 'zustand/middleware'
import { createStore } from 'zustand'
import { PizzaSize, PizzaType } from 'entities/PizzaCard'
import type { ChosenPizzaState, ChosenPizzaStore } from '../../lib/types/store'

export const defaultInitState: ChosenPizzaState = {
    pizza: undefined,
    pizzaSize: PizzaSize.MIDDLE,
    pizzaType: PizzaType.TRADITIONAL
}

export const createChosenPizzaStore = (
    initState: ChosenPizzaState = defaultInitState
) => {
    return createStore<ChosenPizzaStore>()(
        devtools(
            (set) => ({
                ...initState,
                setSize: (newSize: string) => {
                    set(() => ({ pizzaSize: newSize }))
                },
                setType: (newType: string) => {
                    set(() => ({ pizzaType: newType }))
                }
            }),
            { name: 'ChosenPizza' }
        )
    )
}
