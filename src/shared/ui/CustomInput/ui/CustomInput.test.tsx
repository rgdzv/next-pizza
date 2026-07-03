import { render, screen } from '@testing-library/react'
// import { userEvent } from '@testing-library/user-event'
import { SearchIcon } from '../../../assets'
import { CustomInput } from './CustomInput'

describe('Input', () => {
    test('render', () => {
        render(<CustomInput value='' onChange={jest.fn()} />)

        const inputWrapper = screen.getByTestId('input-wrapper')
        const input = screen.getByRole('textbox')
        expect(inputWrapper).toBeInTheDocument()
        expect(inputWrapper).toContainElement(input)
    })

    test('input with value', () => {
        render(<CustomInput value='test' onChange={jest.fn()} />)

        const inputWrapper = screen.getByTestId('input-wrapper')
        const input = screen.getByRole('textbox')
        expect(inputWrapper).toBeInTheDocument()
        expect(inputWrapper).toContainElement(input)
        expect(input).toHaveValue('test')
    })

    test('input with empty value', () => {
        render(<CustomInput value='' onChange={jest.fn()} />)

        const inputWrapper = screen.getByTestId('input-wrapper')
        const input = screen.getByRole('textbox')
        expect(inputWrapper).toBeInTheDocument()
        expect(inputWrapper).toContainElement(input)
        expect(input).toHaveValue('')
    })

    test('input wrapper with special class', () => {
        render(
            <CustomInput
                value=''
                inputWrapperClassName='searchPizza'
                onChange={jest.fn()}
            />
        )

        const inputWrapper = screen.getByTestId('input-wrapper')
        const input = screen.getByRole('textbox')
        expect(inputWrapper).toBeInTheDocument()
        expect(inputWrapper).toContainElement(input)
        expect(inputWrapper).toHaveClass('searchPizza')
    })

    test('input with placeholder', () => {
        render(<CustomInput value='' placeholder='test' onChange={jest.fn()} />)

        const inputWrapper = screen.getByTestId('input-wrapper')
        const input = screen.getByRole('textbox')
        expect(inputWrapper).toBeInTheDocument()
        expect(inputWrapper).toContainElement(input)
        expect(input).toHaveAttribute('placeholder', 'test')
    })

    test('input disabled', () => {
        render(<CustomInput value='' disabled />)

        const inputWrapper = screen.getByTestId('input-wrapper')
        const input = screen.getByRole('textbox')
        expect(inputWrapper).toBeInTheDocument()
        expect(inputWrapper).toContainElement(input)
        expect(input).toBeDisabled()
    })

    test('input wrapper with icon', () => {
        render(
            <CustomInput
                value=''
                icon={<SearchIcon data-testid='search-icon' />}
                onChange={jest.fn()}
            />
        )

        const inputWrapper = screen.getByTestId('input-wrapper')
        const input = screen.getByRole('textbox')
        const svgIcon = screen.getByTestId('search-icon')
        expect(inputWrapper).toBeInTheDocument()
        expect(inputWrapper).toContainElement(input)
        expect(inputWrapper).toContainElement(svgIcon)
    })

    // test('input with typed value inside', async () => {
    //     const user = userEvent.setup()
    //     const handleChange = jest.fn()

    //     render(<CustomInput value='' onChange={handleChange} />)

    //     const inputWrapper = screen.getByTestId('input-wrapper')
    //     const input = screen.getByRole('textbox')
    //     expect(inputWrapper).toBeInTheDocument()
    //     expect(inputWrapper).toContainElement(input)
    //     expect(input).toHaveValue('')

    //     await user.type(input, 'test')
    //     expect(handleChange).toHaveBeenCalledTimes(1)
    //     expect(input).toHaveValue('test')
    // })
})
