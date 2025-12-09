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
    const [opened, setIsOpened] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const popupRef = useRef<HTMLDivElement>(null)

    const handleClick = () => {
        setIsOpened((prev) => !prev)
        setIsActive((prev) => !prev)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                !popupRef.current?.contains(event.target as Node) &&
                !buttonRef.current?.contains(event.target as Node)
            ) {
                setIsOpened(false)
                setIsActive(false)
            }
        }

        if (opened) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [opened])

    return (
        <div className={styles.calories}>
            <CustomButton
                className='calories'
                onClick={handleClick}
                caloriesActive={isActive}
                buttonRef={buttonRef}
            >
                <CaloriesIcon title='Энергетическая ценность' />
            </CustomButton>
            {opened && (
                <div className={styles.popup} ref={popupRef}>
                    <div className={styles.info}>
                        <div className={styles.header}>
                            Пищевая ценность на 100 г
                        </div>
                        <div className={styles.main}>
                            <div className={styles.calories}>
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
            )}
        </div>
    )
}
