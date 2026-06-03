import { useChosenPizzaStore } from '../../model/store/provider/chosen-pizza-store-provider'
import { getIngredients } from '../../model/store/selectors/getIngredients/getIngredients'
import { getPizzaIngredientPrice } from '../../model/store/selectors/getPizzaIngredientPrice/getPizzaIngredientPrice'
import { getSetIngredient } from '../../model/store/selectors/getSetIngredient/getSetIngredient'
import { getSetMinusIngredientPrice } from '../../model/store/selectors/getSetMinusIngredientPrice/getSetMinusIngredientPrice'
import { getSetPlusIngredientPrice } from '../../model/store/selectors/getSetPlusIngredientPrice/getSetPlusIngredientPrice'
import { getSetUpdateIngredientPrice } from '../../model/store/selectors/getSetUpdateIngredientPrice/getSetUpdateIngredientPrice'

export const useIngredients = () => {
    const ingredients = useChosenPizzaStore(getIngredients)
    const pizzaIngredientPrice = useChosenPizzaStore(getPizzaIngredientPrice)
    const setIngredient = useChosenPizzaStore(getSetIngredient)
    const setPlusIngredientPrice = useChosenPizzaStore(
        getSetPlusIngredientPrice
    )
    const setMinusIngredientPrice = useChosenPizzaStore(
        getSetMinusIngredientPrice
    )
    const setUpdateIngredientPrice = useChosenPizzaStore(
        getSetUpdateIngredientPrice
    )

    return {
        ingredients,
        setIngredient,
        pizzaIngredientPrice,
        setPlusIngredientPrice,
        setMinusIngredientPrice,
        setUpdateIngredientPrice
    }
}
