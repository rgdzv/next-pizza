import { ComboBoxElement, CustomButton } from 'shared/ui'
import { SearchIcon } from 'shared/assets'
import { useState } from 'react'
import type { ChangeEvent, FC, KeyboardEvent } from 'react'

export interface PizzaInterface {
    id: number
    name: string
}

const pizzas: PizzaInterface[] = [
    { id: 1, name: 'Маргарита' },
    { id: 2, name: 'Сырная' },
    { id: 3, name: 'С беконом' },
    { id: 4, name: '4 сыра' },
    { id: 5, name: 'Пепперони' },
    { id: 6, name: 'Пепперони' },
    { id: 7, name: 'Пепперони' },
    { id: 8, name: 'Пепперони' },
    { id: 9, name: 'Пепперони' },
    { id: 10, name: 'Пепперони' }
]

export const SearchPizzaInput: FC = () => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const fetchPizzaOnEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue !== '') {
            setInputValue('')
        }
    }

    const filteredPizzas =
        inputValue === ''
            ? pizzas
            : pizzas.filter((pizza) => {
                  return pizza.name
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
              })

    const iconOne = (
        <CustomButton className='search'>
            <SearchIcon title='Поиск пиццы' />
        </CustomButton>
    )

    return (
        <ComboBoxElement
            classNameForInputWrapper='search__pizza'
            type='search'
            inputValue={inputValue}
            onInputChange={handleChange}
            placeholder='Поиск пиццы...'
            iconOne={iconOne}
            filteredPizzas={filteredPizzas}
            fetchPizzaOnEnter={fetchPizzaOnEnter}
        />
    )
}
