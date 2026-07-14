import { render, screen } from '@testing-library/react'
// import { userEvent } from '@testing-library/user-event'
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
            <CustomLink href='somewhere' className='primary'>
                Test
            </CustomLink>
        )

        const link = screen.getByRole('link', { name: 'Test' })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', 'somewhere')
        expect(link).toHaveClass('primary')
    })

    test('link disabled', () => {
        render(
            <CustomLink href='somewhere' disabled>
                Test
            </CustomLink>
        )

        const link = screen.getByRole('link', { name: 'Test' })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', 'somewhere')
        expect(link).toHaveClass('disabled')
    })

    // test('link navigates properly after click', async () => {
    //     const user = userEvent.setup()

    //     render(<CustomLink href='somewhere'>Test</CustomLink>)

    //     const link = screen.getByRole('link', { name: 'Test' })
    //     expect(link).toBeInTheDocument()
    //     expect(link).toHaveAttribute('href', 'somewhere')

    //     await user.click(link)
    //     screen.debug()
    //     expect().toHaveBeenCalledWith('somewhere')
    // })
})
