import { useChosenPizzaStore } from '../../model/store/provider/chosen-pizza-store-provider'
import { getIngredients } from '../../model/store/selectors/getIngredients/getIngredients'
import { getPizza } from '../../model/store/selectors/getPizza/getPizza'
import { getPizzaIngredientPrice } from '../../model/store/selectors/getPizzaIngredientPrice/getPizzaIngredientPrice'
import { getPizzaSize } from '../../model/store/selectors/getPizzaSize/getPizzaSize'
import { getPizzaType } from '../../model/store/selectors/getPizzaType/getPizzaType'
import { getSetIngredient } from '../../model/store/selectors/getSetIngredient/getSetIngredient'
import { getSetMinusIngredientPrice } from '../../model/store/selectors/getSetMinusIngredientPrice/getSetMinusIngredientPrice'
import { getSetPizza } from '../../model/store/selectors/getSetPizza/getSetPizza'
import { getSetPizzaSize } from '../../model/store/selectors/getSetPizzaSize/getSetPizzaSize'
import { getSetPizzaType } from '../../model/store/selectors/getSetPizzaType/getSetPizzaType'
import { getSetPlusIngredientPrice } from '../../model/store/selectors/getSetPlusIngredientPrice/getSetPlusIngredientPrice'
import { getSetUpdateIngredientPrice } from '../../model/store/selectors/getSetUpdateIngredientPrice/getSetUpdateIngredientPrice'

export const useChosenPizza = () => {
    const chosenPizza = useChosenPizzaStore(getPizza)
    const setChosenPizza = useChosenPizzaStore(getSetPizza)
    const pizzaSize = useChosenPizzaStore(getPizzaSize)
    const pizzaType = useChosenPizzaStore(getPizzaType)
    const setPizzaSize = useChosenPizzaStore(getSetPizzaSize)
    const setPizzaType = useChosenPizzaStore(getSetPizzaType)
    const pizzaIngredientPrice = useChosenPizzaStore(getPizzaIngredientPrice)
    const ingredients = useChosenPizzaStore(getIngredients)
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
        chosenPizza,
        setChosenPizza,
        pizzaSize,
        pizzaType,
        setPizzaSize,
        setPizzaType,
        ingredients,
        setIngredient,
        pizzaIngredientPrice,
        setPlusIngredientPrice,
        setMinusIngredientPrice,
        setUpdateIngredientPrice
    }
}
