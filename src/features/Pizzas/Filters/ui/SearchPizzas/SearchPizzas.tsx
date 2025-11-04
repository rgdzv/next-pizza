import { ComboBoxElement, CustomButton } from 'shared/ui'
import { SearchIcon } from 'shared/assets'
import { useFiltersStore } from '../../model/store/provider/filters-store-provider'
import { getSearchValue } from '../../model/store/selectors/getSearchValue/getSearchValue'
import { setSearchValue } from '../../model/store/selectors/setSearchValue/setSearchValue'
import type { ChangeEvent, FC } from 'react'

export const SearchPizzas: FC = () => {
    const searchValue = useFiltersStore(getSearchValue)
    const handleSearchValue = useFiltersStore(setSearchValue)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleSearchValue(e.target.value)
    }

    const icon = (
        <CustomButton className='search' disabled>
            <SearchIcon title='Поиск пиццы' />
        </CustomButton>
    )

    return (
        <ComboBoxElement
            inputWrapperClassName='searchPizza'
            type='search'
            inputValue={searchValue}
            onInputChange={handleChange}
            placeholder='Поиск пиццы...'
            icon={icon}
        />
    )
}
