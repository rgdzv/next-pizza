import { ComboBoxElement, CustomButton } from 'shared/ui'
import { SearchIcon } from 'shared/assets'
import { usePizzas } from '../../lib/hooks/usePizzas'
import type { ChangeEvent, FC } from 'react'

export const SearchPizzas: FC = () => {
    const { searchValue, onChangeInput } = usePizzas()

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
