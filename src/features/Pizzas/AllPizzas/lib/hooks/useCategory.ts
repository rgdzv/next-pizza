import { useCallback } from 'react'
import { getCategory } from '../../model/store/selectors/getCategory/getCategory'
import { usePizzasStore } from '../../model/store/provider/pizzas-store-provider'
import { getSetCategory } from '../../model/store/selectors/getSetCategory/getSetCategory'
import { useFetchData } from './useFetchData'

export const useCategory = () => {
    const category = usePizzasStore(getCategory)
    const setCategory = usePizzasStore(getSetCategory)
    const { fetchData } = useFetchData()

    const onChangeCategory = useCallback(
        (newPage: number) => {
            setCategory(newPage)
            fetchData()
        },
        [setCategory, fetchData]
    )

    return { category, onChangeCategory }
}
