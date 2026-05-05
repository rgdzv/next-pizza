import { devtools } from 'zustand/middleware'
import { createStore } from 'zustand'
import type { BasketPizza } from 'entities/BasketPizzaCard'
import type { BasketPizzaState, BasketPizzaStore } from '../../lib/types/store'

export const defaultInitState: BasketPizzaState = {
    pizzasInBasket: undefined,
    totalPrice: 0
}

export const createBasketPizzaStore = (
    initState: BasketPizzaState = defaultInitState
) => {
    return createStore<BasketPizzaStore>()(
        devtools(
            (set, _, store) => ({
                ...initState,
                addPizzaToBasket: (pizza: BasketPizza) => {
                    set((state) => {
                        const isPizzaInBasket = state.pizzasInBasket?.find(
                            (obj) => obj.id === pizza.id
                        )
                        let newTotalPrice = state.totalPrice

                        if (isPizzaInBasket) {
                            const updatedPizzas = state.pizzasInBasket?.map(
                                (item) => {
                                    if (item.id === pizza.id) {
                                        const newCount = item.count + 1
                                        const totalPriceForCount =
                                            newCount * item.price
                                        return {
                                            ...item,
                                            count: newCount,
                                            totalPriceForCount
                                        }
                                    }
                                    return item
                                }
                            )
                            newTotalPrice += pizza.price

                            return {
                                ...state,
                                pizzasInBasket: updatedPizzas,
                                totalPrice: newTotalPrice
                            }
                        } else {
                            const newPizza = {
                                ...pizza,
                                count: 1,
                                totalPriceForCount: pizza.price
                            }
                            newTotalPrice += pizza.price

                            return {
                                ...state,
                                pizzasInBasket: [
                                    ...(state.pizzasInBasket ?? []),
                                    { ...newPizza }
                                ],
                                totalPrice: newTotalPrice
                            }
                        }
                    })
                },
                removePizzaFromBasket: (
                    pizza: BasketPizza,
                    removeCompletely = false
                ) => {
                    set((state) => {
                        const isPizzaInBasket = state.pizzasInBasket?.find(
                            (obj) => obj.id === pizza.id
                        )

                        let newTotalPrice = state.totalPrice

                        if (removeCompletely && isPizzaInBasket) {
                            const updatedPizzas = state.pizzasInBasket?.filter(
                                (obj) => obj.id !== pizza.id
                            )

                            newTotalPrice -= isPizzaInBasket.count * pizza.price

                            return {
                                ...state,
                                pizzasInBasket: updatedPizzas,
                                totalPrice: newTotalPrice
                            }
                        }

                        if (isPizzaInBasket && isPizzaInBasket.count > 1) {
                            const updatedPizzas = state.pizzasInBasket?.map(
                                (item) => {
                                    if (item.id === pizza.id) {
                                        const newCount = item.count - 1
                                        const totalPriceForCount =
                                            newCount * item.price
                                        return {
                                            ...item,
                                            count: newCount,
                                            totalPriceForCount
                                        }
                                    }
                                    return item
                                }
                            )

                            newTotalPrice -= pizza.price

                            return {
                                ...state,
                                pizzasInBasket: updatedPizzas,
                                totalPrice: newTotalPrice
                            }
                        } else {
                            const updatedPizzas = state.pizzasInBasket?.filter(
                                (obj) => obj.id !== pizza.id
                            )

                            newTotalPrice -= pizza.price

                            return {
                                ...state,
                                pizzasInBasket: updatedPizzas,
                                totalPrice: newTotalPrice
                            }
                        }
                    })
                },
                removeAllPizzas: () => {
                    set(store.getInitialState())
                }
            }),
            { name: 'BasketPizza' }
        )
    )
}
