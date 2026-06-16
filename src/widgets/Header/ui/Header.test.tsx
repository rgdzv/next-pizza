import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
    test('render', () => {
        render(
            <Header
                openDialog={() => {
                    console.log()
                }}
            />
        )
        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument()
    })
})
