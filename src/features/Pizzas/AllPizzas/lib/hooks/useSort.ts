import { useCallback } from 'react'
import { usePizzasStore } from '../../model/store/provider/pizzas-store-provider'
import { getSortingObj } from '../../model/store/selectors/getSortingObj/getSortingObj'
import { getSetSortingObj } from '../../model/store/selectors/getSetSortingObj/getSetSortingObj'
import { useFetchData } from './useFetchData'
import type { StateSortingObj } from '../types/store'

export const useSort = () => {
    const sortingObj = usePizzasStore(getSortingObj)
    const setSortingObj = usePizzasStore(getSetSortingObj)
    const { fetchData } = useFetchData()

    const onChangeSortingObj = useCallback(
        (obj: StateSortingObj) => {
            setSortingObj(obj)
            fetchData()
        },
        [setSortingObj, fetchData]
    )

    return {
        sortingObj,
        onChangeSortingObj
    }
}
