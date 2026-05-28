import { usePizzasStore } from '../../model/store/provider/pizzas-store-provider'
import { getPizzas } from '../../model/store/selectors/getPizzas/getPizzas'
import { getIsLoading } from '../../model/store/selectors/getIsLoading/getIsLoading'
import { getError } from '../../model/store/selectors/getError/getError'
import { getHasMore } from '../../model/store/selectors/getHasMore/getHasMore'

export const usePizzas = () => {
    const data = usePizzasStore(getPizzas)
    const isLoading = usePizzasStore(getIsLoading)
    const error = usePizzasStore(getError)
    const hasMore = usePizzasStore(getHasMore)

    return {
        data,
        isLoading,
        error,
        hasMore
    }
}
