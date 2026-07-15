import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { BasketPizzaCard } from './BasketPizzaCard'
import type { BasketPizza } from '../lib/types/basketPizza'

const basketPizzaMock: BasketPizza = {
    id: '1',
    imgSrc: 'https://media.dodostatic.net/image/r:584x584/019a10a0c9ab792190a97768688bc6e9.jpg',
    title: 'Терьяки',
    size: '30',
    type: 'thin',
    price: 750,
    weight: '600',
    count: 1,
    totalPriceForCount: 750,
    ingredients: ['пряная говядина', 'зеленый перец']
}

const handleAddPizzaMock = jest.fn()
const handleRemovePizzaMock = jest.fn()
const handleRemovePizzaCompletelyMock = jest.fn()

describe('BasketPizzaCard', () => {
    test('render', () => {
        render(
            <BasketPizzaCard
                pizza={basketPizzaMock}
                handleAddPizza={handleAddPizzaMock}
                handleRemovePizza={handleRemovePizzaMock}
                handleRemovePizzaCompletely={handleRemovePizzaCompletelyMock}
                formattedPrice='1233'
                ingredients='пряная говядина, зеленый перец'
            />
        )

        const basketPizzaCard = screen.getByTestId('basket-pizza-card')
        expect(basketPizzaCard).toBeInTheDocument()
    })

    test('all functions: add, remove and removeCompletely - work correctly on click', async () => {
        const user = userEvent.setup()

        render(
            <BasketPizzaCard
                pizza={basketPizzaMock}
                handleAddPizza={handleAddPizzaMock}
                handleRemovePizza={handleRemovePizzaMock}
                handleRemovePizzaCompletely={handleRemovePizzaCompletelyMock}
                formattedPrice='1233'
                ingredients='пряная говядина, зеленый перец'
            />
        )

        const basketPizzaCard = screen.getByTestId('basket-pizza-card')
        const buttonAdd = screen.getByRole('button', { name: 'Прибавить' })
        const buttonRemove = screen.getByRole('button', { name: 'Убавить' })
        const buttonRemoveCompletely = screen.getByRole('button', {
            name: 'Удалить'
        })

        expect(basketPizzaCard).toBeInTheDocument()

        await user.click(buttonAdd)
        expect(handleAddPizzaMock).toHaveBeenCalled()

        await user.click(buttonRemove)
        expect(handleRemovePizzaMock).toHaveBeenCalled()

        await user.click(buttonRemoveCompletely)
        expect(handleRemovePizzaCompletelyMock).toHaveBeenCalled()
    })
})
