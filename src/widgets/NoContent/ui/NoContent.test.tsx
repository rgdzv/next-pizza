import { render, screen } from '@testing-library/react'
import { NoContent } from './NoContent'

describe('NoContent', () => {
    test('render', () => {
        render(<NoContent name='' message='' imgSrc='' />)

        const noContent = screen.getByTestId('no-content')
        expect(noContent).toBeInTheDocument()
    })
})
