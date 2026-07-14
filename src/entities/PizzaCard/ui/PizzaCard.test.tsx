import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { pizzaMock } from '../lib/test/pizzaMock'
import { PizzaCard } from './PizzaCard'

describe('PizzaCard', () => {
    test('render', () => {
        const handleSelect = jest.fn()

        render(
            <PizzaCard
                pizza={pizzaMock}
                pizzaCardPrice='1000'
                handleSelectPizza={handleSelect}
            />
        )

        const pizza = screen.getByRole('article')
        expect(pizza).toBeInTheDocument()
    })

    test('select pizza button works properly', async () => {
        const user = userEvent.setup()
        const handleSelect = jest.fn()

        render(
            <PizzaCard
                pizza={pizzaMock}
                pizzaCardPrice='1000'
                handleSelectPizza={handleSelect}
            />
        )

        const pizza = screen.getByRole('article')
        const button = screen.getByRole('button', { name: 'Выбрать' })
        expect(pizza).toBeInTheDocument()

        await user.click(button)
        expect(handleSelect).toHaveBeenCalled()
    })
})
