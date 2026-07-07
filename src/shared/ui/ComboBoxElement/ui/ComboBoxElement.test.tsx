import { useState } from 'react'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { SearchIcon } from '../../../assets'
import { ComboBoxElement } from './ComboBoxElement'
import type { ChangeEvent } from 'react'

describe('ComboBoxElement', () => {
    test('render', () => {
        render(
            <ComboBoxElement
                type='text'
                inputValue=''
                onInputChange={jest.fn()}
            />
        )

        const comboboxWrapper = screen.getByTestId('combobox-wrapper')
        const combobox = screen.getByRole('combobox')
        expect(comboboxWrapper).toBeInTheDocument()
        expect(comboboxWrapper).toContainElement(combobox)
    })

    test('combobox with value', () => {
        render(
            <ComboBoxElement
                type='text'
                inputValue='test'
                onInputChange={jest.fn()}
            />
        )

        const comboboxWrapper = screen.getByTestId('combobox-wrapper')
        const combobox = screen.getByRole('combobox')
        expect(comboboxWrapper).toBeInTheDocument()
        expect(comboboxWrapper).toContainElement(combobox)
        expect(combobox).toHaveValue('test')
    })

    test('combobox with empty value', () => {
        render(
            <ComboBoxElement
                type='text'
                inputValue=''
                onInputChange={jest.fn()}
            />
        )

        const comboboxWrapper = screen.getByTestId('combobox-wrapper')
        const combobox = screen.getByRole('combobox')
        expect(comboboxWrapper).toBeInTheDocument()
        expect(comboboxWrapper).toContainElement(combobox)
        expect(combobox).toHaveValue('')
    })

    test('combobox wrapper with special class', () => {
        render(
            <ComboBoxElement
                type='text'
                inputValue=''
                onInputChange={jest.fn()}
                inputWrapperClassName='searchPizza'
            />
        )

        const comboboxWrapper = screen.getByTestId('combobox-wrapper')
        const combobox = screen.getByRole('combobox')
        expect(comboboxWrapper).toBeInTheDocument()
        expect(comboboxWrapper).toContainElement(combobox)
        expect(comboboxWrapper).toHaveClass('searchPizza')
    })

    test('combobox with placeholder', () => {
        render(
            <ComboBoxElement
                type='text'
                inputValue=''
                onInputChange={jest.fn()}
                placeholder='test'
            />
        )

        const comboboxWrapper = screen.getByTestId('combobox-wrapper')
        const combobox = screen.getByRole('combobox')
        expect(comboboxWrapper).toBeInTheDocument()
        expect(comboboxWrapper).toContainElement(combobox)
        expect(combobox).toHaveAttribute('placeholder', 'test')
    })

    test('combobox wrapper with icon', () => {
        render(
            <ComboBoxElement
                type='text'
                inputValue=''
                onInputChange={jest.fn()}
                icon={<SearchIcon data-testid='search-icon' />}
            />
        )

        const comboboxWrapper = screen.getByTestId('combobox-wrapper')
        const combobox = screen.getByRole('combobox')
        const svgIcon = screen.getByTestId('search-icon')
        expect(comboboxWrapper).toBeInTheDocument()
        expect(comboboxWrapper).toContainElement(combobox)
        expect(comboboxWrapper).toContainElement(svgIcon)
    })

    test('combobox with typed value inside', async () => {
        const user = userEvent.setup()

        const WrapperComponent = () => {
            const [value, setValue] = useState('')
            const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
                setValue(e.target.value)
            }

            return (
                <ComboBoxElement
                    type='text'
                    inputValue={value}
                    onInputChange={handleChange}
                />
            )
        }

        render(<WrapperComponent />)

        const comboboxWrapper = screen.getByTestId('combobox-wrapper')
        const combobox = screen.getByRole('combobox')
        expect(comboboxWrapper).toBeInTheDocument()
        expect(comboboxWrapper).toContainElement(combobox)
        expect(combobox).toHaveValue('')
        await user.type(combobox, 'test')
        expect(combobox).toHaveValue('test')
    })
})
