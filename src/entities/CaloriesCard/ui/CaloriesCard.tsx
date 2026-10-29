import styles from './CaloriesCard.module.scss'
import type { PizzaNutrition } from '../../PizzaCard'
import type { FC, RefObject } from 'react'

interface CaloriesCardPropsInterface {
    popupRef: RefObject<HTMLDivElement | null>
    nutrition: PizzaNutrition
    weight: number
}

export const CaloriesCard: FC<CaloriesCardPropsInterface> = ({
    popupRef,
    nutrition,
    weight
}) => {
    return (
        <div
            className={styles.popup}
            ref={popupRef}
            data-testid='calories-card'
        >
            <div className={styles.info}>
                <div className={styles.header}>Пищевая ценность на 100 г</div>
                <div className={styles.main}>
                    <div className={styles.energy}>
                        <span>Энерг. ценность</span>
                        <span>{nutrition.calories} ккал</span>
                    </div>
                    <div className={styles.prot}>
                        <span>Белки</span>
                        <span>{nutrition.protein} г</span>
                    </div>
                    <div className={styles.fat}>
                        <span>Жиры</span>
                        <span>{nutrition.fat} г</span>
                    </div>
                    <div className={styles.carbo}>
                        <span>Углеводы</span>
                        <span>{nutrition.carbs} г</span>
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
