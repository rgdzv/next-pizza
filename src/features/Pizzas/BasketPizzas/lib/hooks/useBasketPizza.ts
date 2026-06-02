import { useBasketPizzaStore } from '../../model/store/provider/basket-pizza-store-provider'
import { getAddPizzaToBasket } from '../../model/store/selectors/getAddPizzaToBasket/getAddPizzaToBasket'
import { getPizzasInBasket } from '../../model/store/selectors/getPizzasInBasket/getPizzasInBasket'
import { getRemoveAllPizzas } from '../../model/store/selectors/getRemoveAllPizzas/getRemoveAllPizzas'
import { getRemovePizzaFromBasket } from '../../model/store/selectors/getRemovePizzaFromBasket/getRemovePizzaFromBasket'
import { getTotalCount } from '../../model/store/selectors/getTotalCount/getTotalCount'
import { getTotalPrice } from '../../model/store/selectors/getTotalPrice/getTotalPrice'

export const useBasketPizza = () => {
    const pizzasInBasket = useBasketPizzaStore(getPizzasInBasket)
    const addPizzaToBasket = useBasketPizzaStore(getAddPizzaToBasket)
    const removePizzaFromBasket = useBasketPizzaStore(getRemovePizzaFromBasket)
    const totalPrice = useBasketPizzaStore(getTotalPrice)
    const removeAllPizzas = useBasketPizzaStore(getRemoveAllPizzas)
    const totalCount = useBasketPizzaStore(getTotalCount)

    return {
        pizzasInBasket,
        addPizzaToBasket,
        removePizzaFromBasket,
        totalPrice,
        removeAllPizzas,
        totalCount
    }
}
