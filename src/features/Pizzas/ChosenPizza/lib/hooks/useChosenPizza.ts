import { useChosenPizzaStore } from '../../model/store/provider/chosen-pizza-store-provider'
import { getPizza } from '../../model/store/selectors/getPizza/getPizza'
import { getPizzaIngredientPrice } from '../../model/store/selectors/getPizzaIngredientPrice/getPizzaIngredientPrice'
import { getPizzaSize } from '../../model/store/selectors/getPizzaSize/getPizzaSize'
import { getPizzaType } from '../../model/store/selectors/getPizzaType/getPizzaType'
import { getSetMinusIngredientPrice } from '../../model/store/selectors/getSetMinusIngredientPrice/getSetMinusIngredientPrice'
import { getSetPizza } from '../../model/store/selectors/getSetPizza/getSetPizza'
import { getSetPizzaSize } from '../../model/store/selectors/getSetPizzaSize/getSetPizzaSize'
import { getSetPizzaType } from '../../model/store/selectors/getSetPizzaType/getSetPizzaType'
import { getSetPlusIngredientPrice } from '../../model/store/selectors/getSetPlusIngredientPrice/getSetPlusIngredientPrice'

export const useChosenPizza = () => {
    const chosenPizza = useChosenPizzaStore(getPizza)
    const setChosenPizza = useChosenPizzaStore(getSetPizza)
    const pizzaSize = useChosenPizzaStore(getPizzaSize)
    const pizzaType = useChosenPizzaStore(getPizzaType)
    const setPizzaSize = useChosenPizzaStore(getSetPizzaSize)
    const setPizzaType = useChosenPizzaStore(getSetPizzaType)
    const pizzaIngredientPrice = useChosenPizzaStore(getPizzaIngredientPrice)
    const setPlusIngredientPrice = useChosenPizzaStore(
        getSetPlusIngredientPrice
    )
    const setMinusIngredientPrice = useChosenPizzaStore(
        getSetMinusIngredientPrice
    )

    return {
        chosenPizza,
        setChosenPizza,
        pizzaSize,
        pizzaType,
        setPizzaSize,
        setPizzaType,
        pizzaIngredientPrice,
        setPlusIngredientPrice,
        setMinusIngredientPrice
    }
}
