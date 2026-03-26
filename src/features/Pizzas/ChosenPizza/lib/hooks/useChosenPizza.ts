import { useChosenPizzaStore } from '../../model/store/provider/chosen-pizza-store-provider'
import { getPizza } from '../../model/store/selectors/getPizza/getPizza'
import { getPizzaSize } from '../../model/store/selectors/getPizzaSize/getPizzaSize'
import { getPizzaType } from '../../model/store/selectors/getPizzaType/getPizzaType'
import { getSetPizza } from '../../model/store/selectors/getSetPizza/getSetPizza'
import { getSetPizzaSize } from '../../model/store/selectors/getSetPizzaSize/getSetPizzaSize'
import { getSetPizzaType } from '../../model/store/selectors/getSetPizzaType/getSetPizzaType'

export const useChosenPizza = () => {
    const chosenPizza = useChosenPizzaStore(getPizza)
    const setChosenPizza = useChosenPizzaStore(getSetPizza)
    const pizzaSize = useChosenPizzaStore(getPizzaSize)
    const pizzaType = useChosenPizzaStore(getPizzaType)
    const setPizzaSize = useChosenPizzaStore(getSetPizzaSize)
    const setPizzaType = useChosenPizzaStore(getSetPizzaType)

    return {
        chosenPizza,
        setChosenPizza,
        pizzaSize,
        pizzaType,
        setPizzaSize,
        setPizzaType
    }
}
