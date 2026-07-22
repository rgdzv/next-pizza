import { render, screen } from '@testing-library/react'
import { BasketEmpty } from './BasketEmpty'

describe('BasketEmpty', () => {
    test('render', () => {
        render(<BasketEmpty />)

        const basketEmpty = screen.getByTestId('basket-empty')
        expect(basketEmpty).toBeInTheDocument()
    })
})
