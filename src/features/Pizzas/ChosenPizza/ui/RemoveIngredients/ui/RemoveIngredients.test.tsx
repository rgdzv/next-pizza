import { render, screen } from '@testing-library/react'
import { ChosenPizzaStoreProvider } from '../../../model/store/provider/chosen-pizza-store-provider'
import { RemoveIngredients } from './RemoveIngredients'

describe('RemoveIngredients', () => {
    test('render', () => {
        render(
            <ChosenPizzaStoreProvider>
                <RemoveIngredients />
            </ChosenPizzaStoreProvider>
        )

        const removeIngredients = screen.getByTestId('remove-ingredients')
        expect(removeIngredients).toBeInTheDocument()
    })
})
