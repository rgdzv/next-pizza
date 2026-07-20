import { render, screen } from '@testing-library/react'
import { BasketPizzaStoreProvider } from 'features/Pizzas/BasketPizzas'
import { ChosenPizzaStoreProvider } from '../../model/store/provider/chosen-pizza-store-provider'
import { AddToBasket } from './AddToBasket'

describe('AddToBasket', () => {
    test('render', () => {
        const handleClose = jest.fn()

        render(
            <BasketPizzaStoreProvider>
                <ChosenPizzaStoreProvider>
                    <AddToBasket closeDialog={handleClose} />
                </ChosenPizzaStoreProvider>
            </BasketPizzaStoreProvider>
        )

        const addToBasket = screen.getByTestId('add-to-basket')
        expect(addToBasket).toBeInTheDocument()
    })
})
