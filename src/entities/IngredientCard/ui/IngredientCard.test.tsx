import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { IngredientCard } from './IngredientCard'

const ingredientMock = {
    id: '1',
    name: 'Пряная говядина',
    src: 'https://test.com/img',
    price: '150'
}

describe('IngredientCard', () => {
    test('render', () => {
        const handleIngredient = jest.fn()

        render(
            <IngredientCard
                ingredient={ingredientMock}
                handleAddIngredient={handleIngredient}
                ingredientAdded={false}
            />
        )

        const ingredientCard = screen.getByRole('button')
        expect(ingredientCard).toBeInTheDocument()
        expect(ingredientCard).toHaveClass('ingredientCard')
    })

    test('button with class ingredientAdded when prop is true', () => {
        const handleIngredient = jest.fn()

        render(
            <IngredientCard
                ingredient={ingredientMock}
                handleAddIngredient={handleIngredient}
                ingredientAdded={true}
            />
        )

        const ingredientCard = screen.getByRole('button')
        expect(ingredientCard).toBeInTheDocument()
        expect(ingredientCard).toHaveClass('ingredientCard')
        expect(ingredientCard).toHaveClass('ingredientAdded')
    })

    test('button onClick is launched when click happens', async () => {
        const user = userEvent.setup()
        const handleIngredient = jest.fn()

        render(
            <IngredientCard
                ingredient={ingredientMock}
                handleAddIngredient={handleIngredient}
                ingredientAdded={false}
            />
        )

        const ingredientCard = screen.getByRole('button')
        expect(ingredientCard).toBeInTheDocument()
        expect(ingredientCard).toHaveClass('ingredientCard')

        await user.click(ingredientCard)
        expect(handleIngredient).toHaveBeenCalled()
    })
})
