'use client'
import { useEffect, useRef, useState } from 'react'
import { CaloriesCard } from 'entities/CaloriesCard'
import { CustomButton } from 'shared/ui'
import { CaloriesIcon } from 'shared/assets'
import { useChosenPizza } from '../../../lib/hooks/useChosenPizza'
import styles from './ShowPizzaTitle.module.scss'
import type { FC } from 'react'
import type { Nutrition } from 'entities/PizzaCard'

export const ShowPizzaTitle: FC = () => {
    const { chosenPizza, pizzaSize, pizzaType } = useChosenPizza()
    const [isOpened, setIsOpened] = useState(false)
    const popupRef = useRef<HTMLDivElement>(null)

    const handleClick = () => {
        setIsOpened((prev) => !prev)
    }

    const nutritionValue = chosenPizza?.details[pizzaType][pizzaSize]
        .nutrition as Nutrition

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
        }

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [isOpened])

    return (
        <div className={styles.mainInfo}>
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
            <h1 className={styles.pizzaInfoTitle}>{chosenPizza?.title}</h1>
            <span className={styles.pizzaInfoSubtitle}>
                {pizzaSize} см, {pizzaType} тесто,&nbsp;
                {nutritionValue.weight} г
            </span>
        </div>
    )
}
