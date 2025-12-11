import { ComboBoxElement, CustomButton } from 'shared/ui'
import { SearchIcon } from 'shared/assets'
import { useFilters } from '../../lib/hooks/useFilters'
import type { ChangeEvent, FC } from 'react'

export const SearchPizzas: FC = () => {
    const { searchValue, onChangeInput } = useFilters()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeInput(e)
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
