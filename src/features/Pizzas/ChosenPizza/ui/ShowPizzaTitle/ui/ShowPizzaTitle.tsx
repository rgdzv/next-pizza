'use client'
import { useEffect, useRef, useState } from 'react'
import { CaloriesCard } from 'entities/CaloriesCard'
import { getPizzaVariant } from 'entities/PizzaCard'
import { CustomButton } from 'shared/ui'
import { CaloriesIcon } from 'shared/assets'
import { useChosenPizza } from '../../../lib/hooks/useChosenPizza'
import { useSizeType } from '../../../lib/hooks/useSizeType'
import styles from './ShowPizzaTitle.module.scss'
import type { FC } from 'react'

export const ShowPizzaTitle: FC = () => {
    const { chosenPizza } = useChosenPizza()
    const { pizzaType, pizzaSize } = useSizeType()
    const [isOpened, setIsOpened] = useState(false)
    const popupRef = useRef<HTMLDivElement>(null)

    const handleClick = () => {
        setIsOpened((prev) => !prev)
    }

    const selectedVariant = getPizzaVariant(chosenPizza, pizzaType, pizzaSize)
    const nutritionValue = selectedVariant?.nutrition ?? {
        calories: 0,
        protein: 0,
        fat: 0,
        carbs: 0
    }

    const caloriesPopupCondition = isOpened && (
        <CaloriesCard
            popupRef={popupRef}
            nutrition={nutritionValue}
            weight={selectedVariant?.weight ?? 0}
        />
    )

    const pizzaTypeTranslated =
        pizzaType === 'traditional' ? 'традиционное' : 'тонкое'

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!popupRef.current?.contains(event.target as Node)) {
                setIsOpened(false)
            }
        }

        if (isOpened) {
            document.addEventListener('click', handleClickOutside)
        }

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [isOpened])

    return (
        <div className={styles.mainInfo} data-testid='show-pizza-title'>
            <div className={styles.calories}>
                <CustomButton
                    variant='calories'
                    onClick={handleClick}
                    data-active={isOpened}
                >
                    <CaloriesIcon title='Энергетическая ценность' />
                </CustomButton>
                {caloriesPopupCondition}
            </div>
            <h1 className={styles.pizzaInfoTitle}>{chosenPizza?.title}</h1>
            <span className={styles.pizzaInfoSubtitle}>
                {pizzaSize} см, {pizzaTypeTranslated} тесто,&nbsp;
                {selectedVariant?.weight} г
            </span>
        </div>
    )
}
