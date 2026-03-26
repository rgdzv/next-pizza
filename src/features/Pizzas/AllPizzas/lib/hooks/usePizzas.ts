import { useCallback } from 'react'
import { useDebounce } from 'shared/lib'
import { getFetchPizzas } from '../../model/store/selectors/getFetchPizzas/getFetchPizzas'
import { getFetchPizzasNextPage } from '../../model/store/selectors/getFetchPizzasNextPage/getFetchPizzasNextPage'
import { getSearchValue } from '../../model/store/selectors/getSearchValue/getSearchValue'
import { getSetSearchValue } from '../../model/store/selectors/getSetSearchValue/getSetSearchValue'
import { getCategory } from '../../model/store/selectors/getCategory/getCategory'
import { getSortingObj } from '../../model/store/selectors/getSortingObj/getSortingObj'
import { getSetSortingObj } from '../../model/store/selectors/getSetSortingObj/getSetSortingObj'
import { getSetCategory } from '../../model/store/selectors/getSetCategory/getSetCategory'
import { usePizzasStore } from '../../model/store/provider/pizzas-store-provider'
import { getSetPage } from '../../model/store/selectors/getSetPage/getSetPage'
import { getPizzas } from '../../model/store/selectors/getPizzas/getPizzas'
import { getIsLoading } from '../../model/store/selectors/getIsLoading/getIsLoading'
import { getError } from '../../model/store/selectors/getError/getError'
import { getHasMore } from '../../model/store/selectors/getHasMore/getHasMore'
import type { StateSortingObj } from '../types/store'
import type { ChangeEvent } from 'react'

export const usePizzas = () => {
    const data = usePizzasStore(getPizzas)
    const isLoading = usePizzasStore(getIsLoading)
    const error = usePizzasStore(getError)
    const hasMore = usePizzasStore(getHasMore)
    const searchValue = usePizzasStore(getSearchValue)
    const category = usePizzasStore(getCategory)
    const sortingObj = usePizzasStore(getSortingObj)
    const fetchPizzas = usePizzasStore(getFetchPizzas)
    const fetchPizzasNextPage = usePizzasStore(getFetchPizzasNextPage)
    const setPage = usePizzasStore(getSetPage)
    const setSearchValue = usePizzasStore(getSetSearchValue)
    const setCategory = usePizzasStore(getSetCategory)
    const setSortingObj = usePizzasStore(getSetSortingObj)

    const fetchData = useCallback(() => {
        setPage(1)
        void fetchPizzas()
    }, [fetchPizzas, setPage])

    const fetchDataNextPage = useCallback(() => {
        void fetchPizzasNextPage()
    }, [fetchPizzasNextPage])

    const debouncedFetchData = useDebounce(fetchData, 300)

    const onChangeCategory = useCallback(
        (newPage: number) => {
            setCategory(newPage)
            fetchData()
        },
        [setCategory, fetchData]
    )

    const onChangeSortingObj = useCallback(
        (obj: StateSortingObj) => {
            setSortingObj(obj)
            fetchData()
        },
        [setSortingObj, fetchData]
    )

    const onChangeInput = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setSearchValue(e.target.value)
            debouncedFetchData()
        },
        [debouncedFetchData, setSearchValue]
    )

    return {
        data,
        isLoading,
        error,
        hasMore,
        fetchData,
        fetchDataNextPage,
        searchValue,
        onChangeInput,
        category,
        onChangeCategory,
        sortingObj,
        onChangeSortingObj
    }
}
