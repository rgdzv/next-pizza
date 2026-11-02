import { useChosenPizzaStore } from '../../model/store/provider/chosen-pizza-store-provider'
import { getError } from '../../model/store/selectors/getError/getError'
import { getExtraIngredients } from '../../model/store/selectors/getExtraIngredients/getExtraIngredients'
import { getIsAddonsLoading } from '../../model/store/selectors/getIsAddonsLoading/getIsAddonsLoading'

export const useExtraIngredients = () => {
    const extraIngredients = useChosenPizzaStore(getExtraIngredients)
    const isAddonsLoading = useChosenPizzaStore(getIsAddonsLoading)
    const extraIngredientsError = useChosenPizzaStore(getError)

    return {
        extraIngredients,
        isAddonsLoading,
        extraIngredientsError
    }
}
