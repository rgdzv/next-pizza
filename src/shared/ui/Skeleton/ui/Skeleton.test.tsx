import { render, screen } from '@testing-library/react'
import { Skeleton } from './Skeleton'

describe('Skeleton', () => {
    test('render', () => {
        render(<Skeleton variant='pizzaCardSkeleton' />)

        const skeleton = screen.getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    test('skeleton with special class', () => {
        render(<Skeleton variant='pizzaCardSkeleton' />)

        const skeleton = screen.getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
        expect(skeleton).toHaveClass('pizzaCardSkeleton')
    })
})
