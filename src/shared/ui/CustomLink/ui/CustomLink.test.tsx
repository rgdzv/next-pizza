import { render, screen } from '@testing-library/react'
import { CustomLink } from './CustomLink'

describe('CustomLink', () => {
    test('render', () => {
        render(<CustomLink href='somewhere'>Test</CustomLink>)

        const link = screen.getByRole('link', { name: 'Test' })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', 'somewhere')
    })

    test('link with special class', () => {
        render(
            <CustomLink href='somewhere' variant='primary'>
                Test
            </CustomLink>
        )

        const link = screen.getByRole('link', { name: 'Test' })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', 'somewhere')
        expect(link).toHaveClass('primary')
    })
})
