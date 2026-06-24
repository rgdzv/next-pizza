import { render, screen } from '@testing-library/react'
import Test from './Test'

describe('Test', () => {
    test('render', () => {
        render(<Test />)
        const test = screen.getByTestId('test')
        expect(test).toBeInTheDocument()
    })
})
