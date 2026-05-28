import { useCallback } from 'react'
import { usePizzasStore } from '../../model/store/provider/pizzas-store-provider'
import { getFetchPizzas } from '../../model/store/selectors/getFetchPizzas/getFetchPizzas'
import { getFetchPizzasNextPage } from '../../model/store/selectors/getFetchPizzasNextPage/getFetchPizzasNextPage'
import { getSetPage } from '../../model/store/selectors/getSetPage/getSetPage'

export const useFetchData = () => {
    const fetchPizzas = usePizzasStore(getFetchPizzas)
    const fetchPizzasNextPage = usePizzasStore(getFetchPizzasNextPage)
    const setPage = usePizzasStore(getSetPage)

    const fetchData = useCallback(() => {
        setPage(1)
        void fetchPizzas()
    }, [fetchPizzas, setPage])

    const fetchDataNextPage = useCallback(() => {
        void fetchPizzasNextPage()
    }, [fetchPizzasNextPage])

    return {
        fetchData,
        fetchDataNextPage
    }
}
