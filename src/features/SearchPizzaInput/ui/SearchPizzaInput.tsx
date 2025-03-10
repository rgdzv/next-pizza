import { CustomButton, CustomInput } from 'shared/ui'
import { SearchIcon } from 'shared/assets'
import { useRef, useState } from 'react'
import type { ChangeEvent, FC } from 'react'

export const SearchPizzaInput: FC = () => {
    const [value, setValue] = useState('')
    const ref = useRef<HTMLInputElement>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const focusInput = () => {
        ref.current?.focus()
    }

    const icon = (
        <CustomButton className='search' onClick={focusInput}>
            <SearchIcon title='Искать пиццу' />
        </CustomButton>
    )

    return (
        <CustomInput
            ref={ref}
            value={value}
            name='Поиск'
            classNameForInputWrapper='search__pizza'
            placeholder='Поиск пиццы...'
            icon={icon}
            onChange={handleChange}
        />
    )
}
