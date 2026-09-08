import { render, screen } from '@testing-library/react'
import { BasketPizzaStoreProvider } from 'features/Pizzas/BasketPizzas'
import { PizzasStoreProvider } from 'features/Pizzas/AllPizzas'
import { ChosenPizzaStoreProvider } from 'features/Pizzas/ChosenPizza'
import Settings from './Settings'

window.ResizeObserver = jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn()
}))

describe('Settings', () => {
    test('render', () => {
        render(
            <PizzasStoreProvider>
                <ChosenPizzaStoreProvider>
                    <BasketPizzaStoreProvider>
                        <Settings />
                    </BasketPizzaStoreProvider>
                </ChosenPizzaStoreProvider>
            </PizzasStoreProvider>
        )

        const settings = screen.getByTestId('settings')
        expect(settings).toBeInTheDocument()
    })
})
