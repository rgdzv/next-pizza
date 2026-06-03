import { useChosenPizzaStore } from '../../model/store/provider/chosen-pizza-store-provider'
import { getPizza } from '../../model/store/selectors/getPizza/getPizza'
import { getSetPizza } from '../../model/store/selectors/getSetPizza/getSetPizza'

export const useChosenPizza = () => {
    const chosenPizza = useChosenPizzaStore(getPizza)
    const setChosenPizza = useChosenPizzaStore(getSetPizza)

    return {
        chosenPizza,
        setChosenPizza
    }
}
