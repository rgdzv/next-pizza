import { useCallback } from 'react'
// import { useDebounce } from 'shared/lib'
import {
    getFetchPizzas,
    getFetchPizzasNextPage,
    usePizzasStore
} from '../../Fetch'
import {
    useFiltersStore,
    getSearchValue,
    getCategory,
    getSortingObj,
    setSearchValue
} from '../../Filters'
import type { ChangeEvent } from 'react'

export const useFilters = () => {
    const fetchPizzas = usePizzasStore(getFetchPizzas)
    const fetchPizzasNextPage = usePizzasStore(getFetchPizzasNextPage)
    const searchValue = useFiltersStore(getSearchValue)
    const category = useFiltersStore(getCategory)
    const { order, sortProperty } = useFiltersStore(getSortingObj)
    const handleSearchValue = useFiltersStore(setSearchValue)

    // console.log(category)

    const fetchData = useCallback(() => {
        void fetchPizzas({
            searchValue,
            category,
            order,
            sortProperty
        })
    }, [fetchPizzas, searchValue, category, order, sortProperty])

    const fetchDataNextPage = useCallback(() => {
        void fetchPizzasNextPage({
            searchValue,
            category,
            order,
            sortProperty
        })
    }, [fetchPizzasNextPage, searchValue, category, order, sortProperty])

    // const debouncedFetch = useDebounce(fetchData, 300)

    const handleInputChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            handleSearchValue(e.target.value)
            // debouncedFetch()
        },
        [handleSearchValue]
    )

    return { fetchData, fetchDataNextPage, searchValue, handleInputChange }
}
