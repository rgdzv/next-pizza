import { useEffect, useRef, useState } from 'react'
import { CaloriesCard } from 'entities/CaloriesCard'
import { CustomButton } from 'shared/ui'
import { CaloriesIcon } from 'shared/assets'
import styles from './ShowCalories.module.scss'
import type { Nutrition } from 'entities/PizzaCard'
import type { FC } from 'react'

interface ShowCaloriesPropsInterface {
    nutritionValue: Nutrition
}

export const ShowCalories: FC<ShowCaloriesPropsInterface> = ({
    nutritionValue
}) => {
    const [isOpened, setIsOpened] = useState(false)
    const popupRef = useRef<HTMLDivElement>(null)

    const handleClick = () => {
        setIsOpened((prev) => !prev)
    }

    const caloriesPopupCondition = isOpened && (
        <CaloriesCard
            popupRef={popupRef}
            calories={nutritionValue.calories}
            carbo={nutritionValue.carbo}
            fat={nutritionValue.fat}
            prot={nutritionValue.prot}
            weight={nutritionValue.weight}
        />
    )

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!popupRef.current?.contains(event.target as Node)) {
                setIsOpened(false)
            }
        }

        if (isOpened) {
            document.addEventListener('click', handleClickOutside)
        } else {
            document.removeEventListener('click', handleClickOutside)
        }

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [isOpened])

    return (
        <div className={styles.calories}>
            <CustomButton
                className='calories'
                onClick={handleClick}
                caloriesActive={isOpened}
            >
                <CaloriesIcon title='Энергетическая ценность' />
            </CustomButton>
            {caloriesPopupCondition}
        </div>
    )
}
