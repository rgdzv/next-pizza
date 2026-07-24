import { render, screen } from '@testing-library/react'
import Settings from './Settings'

describe('Settings', () => {
    test('render', () => {
        render(<Settings />)

        const settings = screen.getByTestId('settings')
        expect(settings).toBeInTheDocument()
    })
})
