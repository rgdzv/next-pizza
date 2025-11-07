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
import type { ChangeEvent } from 'react'
import type { StateSortingObj } from '../types/store'

export const useFilters = () => {
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
        void fetchPizzas()
    }, [fetchPizzas])

    const fetchDataNextPage = useCallback(() => {
        void fetchPizzasNextPage()
    }, [fetchPizzasNextPage])

    const debouncedFetchData = useDebounce(fetchData, 300)

    const onChangeCategory = useCallback(
        (newPage: number) => {
            setCategory(newPage)
            setPage(1)
            fetchData()
        },
        [setCategory, setPage, fetchData]
    )

    const onChangeSortingObj = useCallback(
        (obj: StateSortingObj) => {
            setSortingObj(obj)
            setPage(1)
            fetchData()
        },
        [setSortingObj, setPage, fetchData]
    )

    const onChangeInput = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setSearchValue(e.target.value)
            setPage(1)
            debouncedFetchData()
        },
        [debouncedFetchData, setPage, setSearchValue]
    )

    return {
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
