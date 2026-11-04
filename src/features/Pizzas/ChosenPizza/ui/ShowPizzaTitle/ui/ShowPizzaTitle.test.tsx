import { render, screen } from '@testing-library/react'
import { ChosenPizzaStoreProvider } from '../../../model/store/provider/chosen-pizza-store-provider'
import { ShowPizzaTitle } from './ShowPizzaTitle'

jest.mock('../../../lib/hooks/useChosenPizza', () => ({
    useChosenPizza: () => ({
        chosenPizza: {
            title: 'Маргарита',
            variants: [
                {
                    id: '5-thin-30',
                    dough: 'thin',
                    size: 30,
                    price: 829,
                    img: 'https://media.dodostatic.net/image/r:584x584/0198bf3fb33973f78f8af9892f86df62.png',
                    weight: 540,
                    nutrition: {
                        calories: 206.1,
                        protein: 8.4,
                        fat: 7.8,
                        carbs: 24.1
                    }
                }
            ]
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
