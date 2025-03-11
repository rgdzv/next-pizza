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

    const handleFocus = () => {
        ref.current?.focus()
    }

    // const handleClean = () => {
    //     setValue('')
    // }

    const icon = (
        <CustomButton className='search' onClick={handleFocus}>
            <SearchIcon title='Поиск пиццы' />
        </CustomButton>
    )

    // const icon2 = (
    //     <CustomButton className='clean' onClick={handleClean}>
    //         <CleanIcon title='Очистить' />
    //     </CustomButton>
    // )

    return (
        <CustomInput
            ref={ref}
            value={value}
            classNameForInputWrapper='search__pizza'
            placeholder='Поиск пиццы...'
            icon={icon}
            onChange={handleChange}
        />
    )
}
