import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { CaloriesCard } from './CaloriesCard'

const popupRefMock = createRef<HTMLDivElement>()

describe('CaloriesCard', () => {
    test('render', () => {
        const nutrition = {
            calories: 0,
            protein: 0,
            fat: 0,
            carbs: 0
        }

        render(
            <CaloriesCard
                popupRef={popupRefMock}
                nutrition={nutrition}
                weight={100}
            />
        )

        const caloriesCard = screen.getByTestId('calories-card')
        expect(caloriesCard).toBeInTheDocument()
    })
})
