import { ComboBoxElement, CustomButton } from 'shared/ui'
import { SearchIcon } from 'shared/assets'
import { useSearch } from '../../lib/hooks/useSearch'
import type { ChangeEvent, FC } from 'react'

export const SearchPizzas: FC = () => {
    const { searchValue, onChangeInput } = useSearch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeInput(e)
    }

    const icon = (
        <CustomButton variant='search' disabled>
            <SearchIcon title='Поиск пиццы' />
        </CustomButton>
    )

    return (
        <ComboBoxElement
            variant='searchPizza'
            type='search'
            inputValue={searchValue}
            onInputChange={handleChange}
            placeholder='Поиск пиццы...'
            icon={icon}
        />
    )
}
