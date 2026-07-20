import { render, screen } from '@testing-library/react'
import { ChosenPizzaStoreProvider } from '../../../model/store/provider/chosen-pizza-store-provider'
import { ShowPizzaImage } from './ShowPizzaImage'

describe('ShowPizzaImage', () => {
    test('render', () => {
        render(
            <ChosenPizzaStoreProvider>
                <ShowPizzaImage />
            </ChosenPizzaStoreProvider>
        )

        const showPizzaImage = screen.getByTestId('show-pizza-image')
        expect(showPizzaImage).toBeInTheDocument()
    })
})
