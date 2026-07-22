import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { BasketContent } from './BasketContent'

describe('BasketContent', () => {
    test('render', () => {
        const handleRemove = jest.fn()

        render(
            <BasketContent
                basketPizzasLength='5'
                basketFinalSum='1000'
                pizzas={[]}
                removeAllPizzas={handleRemove}
            />
        )

        const basketContent = screen.getByTestId('basket-content')
        expect(basketContent).toBeInTheDocument()
    })

    test('handleRemove is launched correctly after click', async () => {
        const user = userEvent.setup()
        const handleRemove = jest.fn()

        render(
            <BasketContent
                basketPizzasLength='5'
                basketFinalSum='1000'
                pizzas={[]}
                removeAllPizzas={handleRemove}
            />
        )

        const basketContent = screen.getByTestId('basket-content')
        const button = screen.getByRole('button', { name: 'Удалить' })
        expect(basketContent).toBeInTheDocument()

        await user.click(button)
        expect(handleRemove).toHaveBeenCalled()
    })
})
