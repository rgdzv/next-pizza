import { devtools } from 'zustand/middleware'
import { createStore } from 'zustand'
import { PIZZA_SIZES, PIZZA_TYPES } from 'entities/PizzaCard'
import { getIngredientsPrice } from '../../lib/helper/getIngredientsPrice'
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
                    set((state) => {
                        const pizzaIngredientPrice = getIngredientsPrice(
                            state.extraIngredients,
                            state.ingredients,
                            state.pizzaType,
                            newSize
                        )

                        return {
                            pizzaSize: newSize,
                            pizzaIngredientPrice
                        }
                    })
                },
                setPizzaType: (newType: PizzaType) => {
                    set((state) => {
                        const pizzaIngredientPrice = getIngredientsPrice(
                            state.extraIngredients,
                            state.ingredients,
                            newType,
                            state.pizzaSize
                        )

                        return {
                            pizzaType: newType,
                            pizzaIngredientPrice
                        }
                    })
                },
                setIngredient: (ingName: string | null) => {
                    set((state) => {
                        if (ingName === null)
                            return { ingredients: [], pizzaIngredientPrice: 0 }

                        const isAdded = state.ingredients.includes(ingName)

                        const nextIngredients = isAdded
                            ? state.ingredients.filter(
                                  (ingredient) => ingredient !== ingName
                              )
                            : [...state.ingredients, ingName]

                        const pizzaIngredientPrice = getIngredientsPrice(
                            state.extraIngredients,
                            nextIngredients,
                            state.pizzaType,
                            state.pizzaSize
                        )

                        return {
                            ingredients: nextIngredients,
                            pizzaIngredientPrice
                        }
                    })
                }
            }),
            { name: 'ChosenPizza' }
        )
    )
}
