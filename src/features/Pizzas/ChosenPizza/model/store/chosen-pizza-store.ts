import { devtools } from 'zustand/middleware'
import { createStore } from 'zustand'
import { PIZZA_SIZES, PIZZA_TYPES } from 'entities/PizzaCard'
import type { Pizza, PizzaSize, PizzaType } from 'entities/PizzaCard'
import type { ChosenPizzaState, ChosenPizzaStore } from '../../lib/types/store'

export const defaultInitState: ChosenPizzaState = {
    pizza: undefined,
    pizzaSize: PIZZA_SIZES.MIDDLE,
    pizzaType: PIZZA_TYPES.TRADITIONAL,
    ingredients: [],
    pizzaIngredientPrice: 0
}

export const createChosenPizzaStore = (
    initState: ChosenPizzaState = defaultInitState
) => {
    return createStore<ChosenPizzaStore>()(
        devtools(
            (set) => ({
                ...initState,
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
                        if (ingName === null) {
                            return { ingredients: [] }
                        }
                        const isIngredientAdded =
                            state.ingredients.includes(ingName)

                        const updatedIngredients = isIngredientAdded
                            ? state.ingredients.filter(
                                  (item) => item !== ingName
                              )
                            : [...state.ingredients, ingName]
                        return { ingredients: updatedIngredients }
                    })
                },
                setPlusIngredientPrice: (ingPrice: number) => {
                    set((state) => ({
                        pizzaIngredientPrice:
                            state.pizzaIngredientPrice + ingPrice
                    }))
                },
                setMinusIngredientPrice: (ingPrice: number) => {
                    set((state) => ({
                        pizzaIngredientPrice:
                            state.pizzaIngredientPrice - ingPrice
                    }))
                },
                setUpdateIngredientPrice: (newPrice: number) => {
                    set(() => ({
                        pizzaIngredientPrice: newPrice
                    }))
                }
            }),
            { name: 'ChosenPizza' }
        )
    )
}
