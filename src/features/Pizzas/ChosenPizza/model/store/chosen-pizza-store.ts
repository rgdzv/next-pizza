import { devtools } from 'zustand/middleware'
import { createStore } from 'zustand'
import { PIZZA_SIZES, PIZZA_TYPES } from 'entities/PizzaCard'
import { fetchExtraIngredients } from './actions/fetchExtraIngredients'
import type { Pizza, PizzaSize, PizzaType } from 'entities/PizzaCard'
import type { ChosenPizzaState, ChosenPizzaStore } from '../../lib/types/store'

export const defaultInitState: ChosenPizzaState = {
    pizza: undefined,
    pizzaSize: PIZZA_SIZES.MIDDLE,
    pizzaType: PIZZA_TYPES.TRADITIONAL,
    ingredients: [],
    pizzaIngredientPrice: 0,
    extraIngredients: undefined,
    isAddonsLoading: true,
    error: undefined
}

export const createChosenPizzaStore = (
    initState: ChosenPizzaState = defaultInitState
) => {
    return createStore<ChosenPizzaStore>()(
        devtools(
            (set, get, store) => ({
                ...initState,
                ...fetchExtraIngredients(set, get, store),
                setPizza: (newPizza: Pizza) => {
                    set(() => ({ pizza: newPizza }))
                },
                setPizzaSize: (newSize: PizzaSize) => {
                    set(() => ({ pizzaSize: newSize }))
                },
                setPizzaType: (newType: PizzaType) => {
                    set(() => ({ pizzaType: newType }))
                },
                setIngredient: (ingName: string | null) => {
                    set((state) => {
                        if (ingName === null) return { ingredients: [] }

                        const isAdded = state.ingredients.includes(ingName)

                        return {
                            ingredients: isAdded
                                ? state.ingredients.filter((i) => i !== ingName)
                                : [...state.ingredients, ingName]
                        }
                    })
                }
            }),
            { name: 'ChosenPizza' }
        )
    )
}
