import { useEffect, useRef, useState } from 'react'
import { CaloriesIcon } from 'shared/assets'
import { CustomButton } from 'shared/ui'
import styles from './ShowCalories.module.scss'
import type { FC } from 'react'

interface ShowCaloriesPropsInterface {
    calories: string
    weight: string
    prot: string
    fat: string
    carbo: string
}

export const ShowCalories: FC<ShowCaloriesPropsInterface> = ({
    calories,
    weight,
    prot,
    fat,
    carbo
}) => {
    const [isOpened, setIsOpened] = useState(false)
    const popupRef = useRef<HTMLDivElement>(null)

    const handleClick = () => {
        setIsOpened((prev) => !prev)
    }

    const caloriesPopupCondition = isOpened && (
        <div className={styles.popup} ref={popupRef}>
            <div className={styles.info}>
                <div className={styles.header}>Пищевая ценность на 100 г</div>
                <div className={styles.main}>
                    <div className={styles.energy}>
                        <span>Энерг. ценность</span>
                        <span>{calories} ккал</span>
                    </div>
                    <div className={styles.prot}>
                        <span>Белки</span>
                        <span>{prot} г</span>
                    </div>
                    <div className={styles.fat}>
                        <span>Жиры</span>
                        <span>{fat} г</span>
                    </div>
                    <div className={styles.carbo}>
                        <span>Углеводы</span>
                        <span>{carbo} г</span>
                    </div>
                </div>
                <div className={styles.footer}>
                    <span>Вес</span>
                    <span>{weight} г</span>
                </div>
            </div>
        </div>
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
