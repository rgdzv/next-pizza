import { render, screen } from '@testing-library/react'
import { BasketPizzaStoreProvider } from 'features/Pizzas/BasketPizzas'
import { PizzasStoreProvider } from 'features/Pizzas/AllPizzas'
import { Header } from './Header'

describe('Header', () => {
    test('render Header component', () => {
        render(
            <PizzasStoreProvider>
                <BasketPizzaStoreProvider>
                    <Header openDialog={jest.fn()}></Header>
                </BasketPizzaStoreProvider>
            </PizzasStoreProvider>
        )
        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument()
    })
})
