import { useChosenPizzaStore } from '../../model/store/provider/chosen-pizza-store-provider'
import { getResetPizzaConfiguration } from '../../model/store/selectors/getResetPizzaConfiguration/getResetPizzaConfiguration'

export const useResetPizzaConfig = () => {
    const resetPizzaConfig = useChosenPizzaStore(getResetPizzaConfiguration)

    return {
        resetPizzaConfig
    }
}
