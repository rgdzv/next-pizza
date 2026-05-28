import { useCallback } from 'react'
import { useDebounce } from 'shared/lib'
import { usePizzasStore } from '../../model/store/provider/pizzas-store-provider'
import { getSearchValue } from '../../model/store/selectors/getSearchValue/getSearchValue'
import { getSetSearchValue } from '../../model/store/selectors/getSetSearchValue/getSetSearchValue'
import { useFetchData } from './useFetchData'
import type { ChangeEvent } from 'react'

export const useSearch = () => {
    const searchValue = usePizzasStore(getSearchValue)
    const setSearchValue = usePizzasStore(getSetSearchValue)
    const { fetchData } = useFetchData()

    const debouncedFetchData = useDebounce(fetchData, 300)

    const onChangeInput = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setSearchValue(e.target.value)
            debouncedFetchData()
        },
        [debouncedFetchData, setSearchValue]
    )

    return {
        searchValue,
        onChangeInput
    }
}
