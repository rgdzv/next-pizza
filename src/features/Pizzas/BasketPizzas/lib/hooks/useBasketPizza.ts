'use client'
import { useMemo } from 'react'
import { useBasketPizzaStore } from '../../model/store/provider/basket-pizza-store-provider'
import { getAddPizzaToBasket } from '../../model/store/selectors/getAddPizzaToBasket/getAddPizzaToBasket'
import { getPizzasInBasket } from '../../model/store/selectors/getPizzasInBasket/getPizzasInBasket'
import { getRemoveAllPizzas } from '../../model/store/selectors/getRemoveAllPizzas/getRemoveAllPizzas'
import { getRemovePizzaFromBasket } from '../../model/store/selectors/getRemovePizzaFromBasket/getRemovePizzaFromBasket'

export const useBasketPizza = () => {
    const pizzas = useBasketPizzaStore(getPizzasInBasket)
    const addPizzaToBasket = useBasketPizzaStore(getAddPizzaToBasket)
    const removePizzaFromBasket = useBasketPizzaStore(getRemovePizzaFromBasket)
    const removeAllPizzas = useBasketPizzaStore(getRemoveAllPizzas)

    const pizzasInBasket = useMemo(() => {
        return pizzas.map((pizza) => ({
            ...pizza,
            totalPriceForCount: pizza.price * pizza.count
        }))
    }, [pizzas])

    const totalCount = useMemo(() => {
        return pizzas.reduce((sum, pizza) => sum + pizza.count, 0)
    }, [pizzas])

    const totalPrice = useMemo(() => {
        return pizzas.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0)
    }, [pizzas])

    return {
        pizzasInBasket,
        addPizzaToBasket,
        removePizzaFromBasket,
        totalPrice,
        removeAllPizzas,
        totalCount
    }
}
