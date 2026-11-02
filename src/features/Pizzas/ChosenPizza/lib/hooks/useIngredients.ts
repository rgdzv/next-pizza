import { useChosenPizzaStore } from '../../model/store/provider/chosen-pizza-store-provider'
import { getIngredients } from '../../model/store/selectors/getIngredients/getIngredients'
import { getPizzaIngredientPrice } from '../../model/store/selectors/getPizzaIngredientPrice/getPizzaIngredientPrice'
import { getSetIngredient } from '../../model/store/selectors/getSetIngredient/getSetIngredient'

export const useIngredients = () => {
    const ingredients = useChosenPizzaStore(getIngredients)
    const pizzaIngredientPrice = useChosenPizzaStore(getPizzaIngredientPrice)
    const setIngredient = useChosenPizzaStore(getSetIngredient)

    return {
        ingredients,
        setIngredient,
        pizzaIngredientPrice
    }
}
