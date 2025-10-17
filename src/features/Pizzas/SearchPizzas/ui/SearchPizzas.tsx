import { ComboBoxElement, CustomButton } from 'shared/ui'
import { SearchIcon } from 'shared/assets'
import type { ChangeEvent, FC } from 'react'

interface SearchPizzasPropsInterface {
    searchValue: string
    setSearchValue: (value: string) => void
}

export const SearchPizzas: FC<SearchPizzasPropsInterface> = ({
    searchValue,
    setSearchValue
}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
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
