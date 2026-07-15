import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { CaloriesCard } from './CaloriesCard'

const popupRefMock = createRef<HTMLDivElement>()

describe('CaloriesCard', () => {
    test('render', () => {
        render(
            <CaloriesCard
                popupRef={popupRefMock}
                calories='100'
                prot='100'
                fat='100'
                carbo='100'
                weight='500'
            />
        )

        const caloriesCard = screen.getByTestId('calories-card')
        expect(caloriesCard).toBeInTheDocument()
    })
})
