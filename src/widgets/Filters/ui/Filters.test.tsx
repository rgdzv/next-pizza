import { render, screen } from '@testing-library/react'
import { PizzasStoreProvider } from 'features/Pizzas/AllPizzas'
import { Filters } from './Filters'

window.ResizeObserver = jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn()
}))

describe('Filters', () => {
    test('render', () => {
        render(
            <PizzasStoreProvider>
                <Filters />
            </PizzasStoreProvider>
        )

        const filters = screen.getByTestId('filters')
        expect(filters).toBeInTheDocument()
    })
})
