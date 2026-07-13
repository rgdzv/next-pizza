import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { CaloriesIcon } from '../../../assets'
import { CustomButton } from './CustomButton'

describe('Button', () => {
    test('render', () => {
        render(<CustomButton>Test</CustomButton>)

        const button = screen.getByRole('button', { name: 'Test' })
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('button')
    })

    test('button with special class', () => {
        render(<CustomButton className='primary'>Test</CustomButton>)

        const button = screen.getByRole('button', {
            name: 'Test'
        })
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('primary')
    })

    test('button with special class from boolean prop', () => {
        render(<CustomButton categoryActive={true}>Category</CustomButton>)

        const button = screen.getByRole('button', {
            name: 'Category'
        })
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('categoryActive')
    })

    test('disabled button', () => {
        render(<CustomButton disabled={true}>Test</CustomButton>)

        const button = screen.getByRole('button', { name: 'Test' })
        expect(button).toBeInTheDocument()
        expect(button).toHaveAttribute('disabled')
    })

    test('button with svg inside', () => {
        render(
            <CustomButton>
                <CaloriesIcon data-testid='calories-icon' />
            </CustomButton>
        )

        const button = screen.getByRole('button')
        const svgIcon = screen.getByTestId('calories-icon')
        expect(button).toBeInTheDocument()
        expect(button).toContainElement(svgIcon)
    })

    test('button onClick is launched when click happens', async () => {
        const user = userEvent.setup()
        const handleClick = jest.fn()

        render(<CustomButton onClick={handleClick}>Test</CustomButton>)

        const button = screen.getByRole('button', { name: 'Test' })
        expect(button).toBeInTheDocument()

        await user.click(button)
        expect(handleClick).toHaveBeenCalled()
    })
})
