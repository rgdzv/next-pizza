import { useBasketPizzaStore } from '../../model/store/provider/basket-pizza-store-provider'
import { getAddPizzaToBasket } from '../../model/store/selectors/getAddPizzaToBasket/getAddPizzaToBasket'
import { getPizzasInBasket } from '../../model/store/selectors/getPizzasInBasket/getPizzasInBasket'
import { getRemovePizzaFromBasket } from '../../model/store/selectors/getRemovePizzaFromBasket/getRemovePizzaFromBasket'
import { getTotalPrice } from '../../model/store/selectors/getTotalPrice/getTotalPrice'

export const useBasketPizza = () => {
    const pizzasInBasket = useBasketPizzaStore(getPizzasInBasket)
    const addPizzaToBasket = useBasketPizzaStore(getAddPizzaToBasket)
    const removePizzaFromBasket = useBasketPizzaStore(getRemovePizzaFromBasket)
    const totalPrice = useBasketPizzaStore(getTotalPrice)

    return {
        pizzasInBasket,
        addPizzaToBasket,
        removePizzaFromBasket,
        totalPrice
    }
}
