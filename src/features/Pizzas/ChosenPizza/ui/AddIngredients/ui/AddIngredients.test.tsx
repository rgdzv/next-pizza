import { render, screen } from '@testing-library/react'
import { ChosenPizzaStoreProvider } from '../../../model/store/provider/chosen-pizza-store-provider'
import { AddIngredients } from './AddIngredients'

describe('AddIngredients', () => {
    test('render', () => {
        render(
            <ChosenPizzaStoreProvider>
                <AddIngredients />
            </ChosenPizzaStoreProvider>
        )

        const addIngredients = screen.getByTestId('add-ingredients')
        expect(addIngredients).toBeInTheDocument()
    })
})
