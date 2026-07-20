import { render, screen } from '@testing-library/react'
import { PizzasStoreProvider } from '../../../model/store/provider/pizzas-store-provider'
import { SwitchCategoryPizzas } from './SwitchCategoryPizzas'

describe('SwitchCategoryPizzas', () => {
    test('render', () => {
        render(
            <PizzasStoreProvider>
                <SwitchCategoryPizzas />
            </PizzasStoreProvider>
        )

        const switchCategory = screen.getByTestId('switch-category')
        expect(switchCategory).toBeInTheDocument()
    })
})
