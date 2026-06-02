import { devtools } from 'zustand/middleware'
import { createStore } from 'zustand'
import type { BasketPizza } from 'entities/BasketPizzaCard'
import type { BasketPizzaState, BasketPizzaStore } from '../../lib/types/store'

export const defaultInitState: BasketPizzaState = {
    pizzasInBasket: undefined,
    totalPrice: 0,
    totalCount: 0
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
                        let newTotalCount = state.totalCount

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
                            newTotalCount += 1

                            return {
                                ...state,
                                pizzasInBasket: updatedPizzas,
                                totalPrice: newTotalPrice,
                                totalCount: newTotalCount
                            }
                        } else {
                            const newPizza = {
                                ...pizza,
                                count: 1,
                                totalPriceForCount: pizza.price
                            }

                            newTotalPrice += pizza.price
                            newTotalCount += 1

                            return {
                                ...state,
                                pizzasInBasket: [
                                    ...(state.pizzasInBasket ?? []),
                                    { ...newPizza }
                                ],
                                totalPrice: newTotalPrice,
                                totalCount: newTotalCount
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
                        let newTotalCount = state.totalCount

                        if (removeCompletely && isPizzaInBasket) {
                            const updatedPizzas = state.pizzasInBasket?.filter(
                                (obj) => obj.id !== pizza.id
                            )

                            newTotalPrice -= isPizzaInBasket.count * pizza.price
                            newTotalCount -= isPizzaInBasket.count

                            return {
                                ...state,
                                pizzasInBasket: updatedPizzas,
                                totalPrice: newTotalPrice,
                                totalCount: newTotalCount
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
                            newTotalCount -= 1

                            return {
                                ...state,
                                pizzasInBasket: updatedPizzas,
                                totalPrice: newTotalPrice,
                                totalCount: newTotalCount
                            }
                        } else {
                            const updatedPizzas = state.pizzasInBasket?.filter(
                                (obj) => obj.id !== pizza.id
                            )

                            newTotalPrice -= pizza.price
                            newTotalCount -= 1

                            return {
                                ...state,
                                pizzasInBasket: updatedPizzas,
                                totalPrice: newTotalPrice,
                                totalCount: newTotalCount
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
