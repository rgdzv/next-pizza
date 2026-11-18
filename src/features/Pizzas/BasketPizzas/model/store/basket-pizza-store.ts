import { devtools } from 'zustand/middleware'
import { createStore } from 'zustand'
import { getBasketPizzaKey } from '../../lib/helper/getBasketPizzaKey'
import type { BasketPizza } from 'entities/BasketPizzaCard'
import type { BasketPizzaState, BasketPizzaStore } from '../../lib/types/store'

export const defaultInitState: BasketPizzaState = {
    pizzasInBasket: []
}

export const createBasketPizzaStore = (
    initState: BasketPizzaState = defaultInitState
) => {
    return createStore<BasketPizzaStore>()(
        devtools(
            (set) => ({
                ...initState,
                addPizzaToBasket: (pizza: BasketPizza) => {
                    set((state) => {
                        const currentPizzas = state.pizzasInBasket

                        const pizzaKey = getBasketPizzaKey(pizza)

                        const existingPizzaIndex = currentPizzas.findIndex(
                            (item) => getBasketPizzaKey(item) === pizzaKey
                        )

                        if (existingPizzaIndex === -1) {
                            return {
                                pizzasInBasket: [
                                    ...currentPizzas,
                                    {
                                        ...pizza,
                                        count: 1
                                    }
                                ]
                            }
                        }

                        const updatedPizzas = currentPizzas.map(
                            (item, index) => {
                                if (index !== existingPizzaIndex) {
                                    return item
                                }

                                return {
                                    ...item,
                                    count: item.count + 1
                                }
                            }
                        )

                        return {
                            pizzasInBasket: updatedPizzas
                        }
                    }, false)
                },
                removePizzaFromBasket: (
                    pizza: BasketPizza,
                    removeCompletely = false
                ) => {
                    set((state) => {
                        const currentPizzas = state.pizzasInBasket

                        const pizzaKey = getBasketPizzaKey(pizza)

                        const existingPizza = currentPizzas.find(
                            (item) => getBasketPizzaKey(item) === pizzaKey
                        )

                        if (!existingPizza) {
                            return state
                        }

                        const shouldRemoveCompletely =
                            removeCompletely || existingPizza.count <= 1

                        if (shouldRemoveCompletely) {
                            return {
                                pizzasInBasket: currentPizzas.filter(
                                    (item) =>
                                        getBasketPizzaKey(item) !== pizzaKey
                                )
                            }
                        }

                        const updatedPizzas = currentPizzas.map((item) => {
                            if (getBasketPizzaKey(item) !== pizzaKey) {
                                return item
                            }

                            return {
                                ...item,
                                count: item.count - 1
                            }
                        })

                        return {
                            pizzasInBasket: updatedPizzas
                        }
                    }, false)
                },
                removeAllPizzas: () => {
                    set(
                        {
                            pizzasInBasket: []
                        },
                        false
                    )
                }
            }),
            { name: 'BasketPizza' }
        )
    )
}
