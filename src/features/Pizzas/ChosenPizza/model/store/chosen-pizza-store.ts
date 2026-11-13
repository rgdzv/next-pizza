import { devtools } from 'zustand/middleware'
import { createStore } from 'zustand'
import { PIZZA_SIZES, PIZZA_TYPES } from 'entities/PizzaCard'
import { getIngredientsPrice } from '../../lib/helper/getIngredientsPrice'
import { isSmallPizzaSize } from '../../lib/helper/isSmallPizzaType'
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
    isAddonsLoading: false,
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
                        const nextPizzaType = isSmallPizzaSize(newSize)
                            ? PIZZA_TYPES.TRADITIONAL
                            : state.pizzaType

                        const pizzaIngredientPrice = getIngredientsPrice(
                            state.extraIngredients,
                            state.ingredients,
                            nextPizzaType,
                            newSize
                        )

                        return {
                            pizzaSize: newSize,
                            pizzaType: nextPizzaType,
                            pizzaIngredientPrice
                        }
                    })
                },
                setPizzaType: (newType: PizzaType) => {
                    set((state) => {
                        if (
                            newType === PIZZA_TYPES.THIN &&
                            isSmallPizzaSize(state.pizzaSize)
                        ) {
                            return state
                        }

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
                },
                resetPizzaConfiguration: () => {
                    set({
                        pizzaSize: PIZZA_SIZES.MIDDLE,
                        pizzaType: PIZZA_TYPES.TRADITIONAL,
                        ingredients: [],
                        pizzaIngredientPrice: 0
                    })
                }
            }),
            { name: 'ChosenPizza' }
        )
    )
}
