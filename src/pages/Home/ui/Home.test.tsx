import { render, screen } from '@testing-library/react'
import { BasketPizzaStoreProvider } from 'features/Pizzas/BasketPizzas'
import { PizzasStoreProvider } from 'features/Pizzas/AllPizzas'
import { ChosenPizzaStoreProvider } from 'features/Pizzas/ChosenPizza'
import Home from './Home'

window.ResizeObserver = jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn()
}))

describe('Home', () => {
    test('render', () => {
        render(
            <PizzasStoreProvider>
                <ChosenPizzaStoreProvider>
                    <BasketPizzaStoreProvider>
                        <Home />
                    </BasketPizzaStoreProvider>
                </ChosenPizzaStoreProvider>
            </PizzasStoreProvider>
        )

        const home = screen.getByTestId('home')
        expect(home).toBeInTheDocument()
    })
})
