import styles from './CaloriesCard.module.scss'
import type { FC, RefObject } from 'react'

interface CaloriesCardPropsInterface {
    popupRef: RefObject<HTMLDivElement | null>
    calories: string
    prot: string
    fat: string
    carbo: string
    weight: string
}

export const CaloriesCard: FC<CaloriesCardPropsInterface> = ({
    popupRef,
    calories,
    prot,
    fat,
    carbo,
    weight
}) => {
    return (
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
}
