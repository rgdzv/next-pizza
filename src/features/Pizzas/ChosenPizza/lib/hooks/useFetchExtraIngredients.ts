import { useChosenPizzaStore } from '../../model/store/provider/chosen-pizza-store-provider'
import { getFetchExtraIngredients } from '../../model/store/selectors/getFetchExtraIngredients/getFetchExtraIngredients'

export const useFetchExtraIngredients = () => {
    const fetchExtraIngredients = useChosenPizzaStore(getFetchExtraIngredients)

    return {
        fetchExtraIngredients
    }
}
