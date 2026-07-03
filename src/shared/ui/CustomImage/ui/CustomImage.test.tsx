import { render, screen } from '@testing-library/react'
import { CustomImage } from './CustomImage'

describe('Image', () => {
    test('render', () => {
        render(
            <CustomImage
                className='pizzaCard'
                src='/example'
                alt='example'
                sizes='100px 100px'
            />
        )

        const imageWrapper = screen.getByTestId('image-wrapper')
        const image: HTMLImageElement = screen.getByRole('img')
        expect(imageWrapper).toBeInTheDocument()
        expect(imageWrapper).toHaveClass('pizzaCard')
        expect(imageWrapper).toContainElement(image)
        expect(image).toHaveAttribute('src')
        expect(image.src).toContain('example')
        expect(image).toHaveAttribute('alt', 'example')
        expect(image).toHaveAttribute('sizes', '100px 100px')
    })
    test('image without sizes prop', () => {
        render(
            <CustomImage className='pizzaCard' src='/example' alt='example' />
        )

        const imageWrapper = screen.getByTestId('image-wrapper')
        const image: HTMLImageElement = screen.getByRole('img')
        expect(imageWrapper).toBeInTheDocument()
        expect(imageWrapper).toHaveClass('pizzaCard')
        expect(imageWrapper).toContainElement(image)
        expect(image).toHaveAttribute('src')
        expect(image.src).toContain('example')
        expect(image).toHaveAttribute('alt', 'example')
        expect(image).not.toHaveAttribute('sizes', '100px 100px')
    })
})
