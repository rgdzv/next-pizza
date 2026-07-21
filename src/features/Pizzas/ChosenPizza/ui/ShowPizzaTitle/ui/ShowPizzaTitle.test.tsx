import { render, screen } from '@testing-library/react'
import { ChosenPizzaStoreProvider } from '../../../model/store/provider/chosen-pizza-store-provider'
import { ShowPizzaTitle } from './ShowPizzaTitle'

jest.mock('../../../lib/hooks/useChosenPizza', () => ({
    useChosenPizza: () => ({
        chosenPizza: {
            title: 'Маргарита',
            details: {
                traditional: {
                    '30': {
                        nutrition: {
                            calories: 200,
                            carbo: 30,
                            fat: 10,
                            prot: 5,
                            weight: 300
                        }
                    }
                }
            }
        }
    })
}))

describe('ShowPizzaTitle', () => {
    test('render', () => {
        render(
            <ChosenPizzaStoreProvider>
                <ShowPizzaTitle />
            </ChosenPizzaStoreProvider>
        )

        const showPizzaTitle = screen.getByTestId('show-pizza-title')
        expect(showPizzaTitle).toBeInTheDocument()
    })
})
