import { render, screen } from '@testing-library/react'
import { CaloriesIcon } from '../../../assets'
import { CustomButton } from './CustomButton'

describe('Button', () => {
    test('render', () => {
        render(<CustomButton>Test</CustomButton>)

        const buttonName = screen.getByRole('button', { name: 'Test' })
        expect(buttonName).toBeInTheDocument()
        expect(buttonName).toHaveClass('button')
    })

    test('button with special class', () => {
        render(<CustomButton className='primary'>Test</CustomButton>)

        const buttonName = screen.getByRole('button', {
            name: 'Test'
        })
        expect(buttonName).toBeInTheDocument()
        expect(buttonName).toHaveClass('primary')
    })

    test('button with special class from boolean prop', () => {
        render(<CustomButton categoryActive={true}>Category</CustomButton>)

        const buttonName = screen.getByRole('button', {
            name: 'Category'
        })
        expect(buttonName).toBeInTheDocument()
        expect(buttonName).toHaveClass('categoryActive')
    })

    test('disabled button', () => {
        render(<CustomButton disabled={true}>Test</CustomButton>)

        const buttonName = screen.getByRole('button', { name: 'Test' })
        expect(buttonName).toBeInTheDocument()
        expect(buttonName).toHaveClass('button')
        expect(buttonName).toHaveAttribute('disabled')
        expect(buttonName).toBeDisabled()
    })

    test('button with svg inside', () => {
        render(
            <CustomButton>
                <CaloriesIcon data-testid='calories-icon' />
            </CustomButton>
        )

        const buttonName = screen.getByRole('button')
        const svgIcon = screen.getByTestId('calories-icon')
        expect(buttonName).toBeInTheDocument()
        expect(buttonName).toHaveClass('button')
        expect(buttonName).toContainElement(svgIcon)
    })
})
