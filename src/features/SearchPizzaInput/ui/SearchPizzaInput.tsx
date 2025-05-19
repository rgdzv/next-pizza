import { useState } from 'react'
import { ComboboxOption } from '@headlessui/react'
import { ComboBoxElement, CustomButton, CustomImage } from 'shared/ui'
import { SearchIcon } from 'shared/assets'
import type { ChangeEvent, FC, KeyboardEvent } from 'react'

const PIZZAS = [
    { id: 1, name: 'Маргарита', price: '150', img: '' },
    { id: 2, name: 'Сырная', price: '150', img: '' },
    { id: 3, name: 'С беконом', price: '150', img: '' },
    { id: 4, name: '4 сыра', price: '150', img: '' },
    { id: 5, name: 'Пепперони', price: '150', img: '' },
    { id: 6, name: 'Пепперони', price: '150', img: '' },
    { id: 7, name: 'Пепперони', price: '150', img: '' },
    { id: 8, name: 'Пепперони', price: '150', img: '' },
    { id: 9, name: 'Пепперони', price: '150', img: '' },
    { id: 10, name: 'Пепперони', price: '150', img: '' }
]

export const SearchPizzaInput: FC = () => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const fetchPizzaOnEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue !== '') {
            // add store dispatch
            setInputValue('')
        }
    }

    const filteredPizzas =
        inputValue === ''
            ? PIZZAS
            : PIZZAS.filter((pizza) => {
                  return pizza.name
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
              })

    const pizzaOptions = filteredPizzas.map((pizza) => (
        <ComboboxOption as='li' key={pizza.id} value={pizza}>
            <CustomImage src={pizza.img} alt={pizza.name} className='mini' />
            <span>{pizza.name}</span>
            <span>от {pizza.price} ₽</span>
        </ComboboxOption>
    ))

    const iconOne = (
        <CustomButton className='search'>
            <SearchIcon title='Поиск пиццы' />
        </CustomButton>
    )

    return (
        <ComboBoxElement
            inputWrapperClassName='searchPizza'
            type='search'
            inputValue={inputValue}
            onInputChange={handleChange}
            placeholder='Поиск пиццы...'
            iconOne={iconOne}
            fetchPizzaOnEnter={fetchPizzaOnEnter}
            pizzaOptions={pizzaOptions}
        />
    )
}
