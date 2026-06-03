import { useChosenPizzaStore } from '../../model/store/provider/chosen-pizza-store-provider'
import { getPizzaSize } from '../../model/store/selectors/getPizzaSize/getPizzaSize'
import { getPizzaType } from '../../model/store/selectors/getPizzaType/getPizzaType'
import { getSetPizzaSize } from '../../model/store/selectors/getSetPizzaSize/getSetPizzaSize'
import { getSetPizzaType } from '../../model/store/selectors/getSetPizzaType/getSetPizzaType'

export const useSizeType = () => {
    const pizzaSize = useChosenPizzaStore(getPizzaSize)
    const pizzaType = useChosenPizzaStore(getPizzaType)
    const setPizzaSize = useChosenPizzaStore(getSetPizzaSize)
    const setPizzaType = useChosenPizzaStore(getSetPizzaType)

    return {
        pizzaSize,
        pizzaType,
        setPizzaSize,
        setPizzaType
    }
}
