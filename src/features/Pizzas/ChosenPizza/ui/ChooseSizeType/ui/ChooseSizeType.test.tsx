import { render, screen } from '@testing-library/react'
import { ChosenPizzaStoreProvider } from '../../../model/store/provider/chosen-pizza-store-provider'
import { ChooseSizeType } from './ChooseSizeType'

describe('ChooseSizeType', () => {
    test('render', () => {
        render(
            <ChosenPizzaStoreProvider>
                <ChooseSizeType />
            </ChosenPizzaStoreProvider>
        )

        const chooseSizeType = screen.getByTestId('choose-size-type')
        expect(chooseSizeType).toBeInTheDocument()
    })
})
