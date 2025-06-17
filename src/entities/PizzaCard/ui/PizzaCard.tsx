import { CustomButton, CustomImage } from 'shared/ui'
import styles from './PizzaCard.module.scss'
import type { Pizza } from '../lib/types/pizza'
import type { FC } from 'react'

interface PizzaCardPropsInterface {
    pizza: Pizza
}

export const PizzaCard: FC<PizzaCardPropsInterface> = ({ pizza }) => {
    return (
        <div className={styles.pizzaCard}>
            <CustomImage
                src={pizza.imgSrc}
                alt={pizza.title}
                className='pizzaCard'
            />
            <p className={styles.pizzaCardName}>{pizza.title}</p>
            <p className={styles.pizzaCardStructure}>{pizza.description}</p>
            <div className={styles.pizzaCardFooter}>
                <span className={styles.pizzaCardFooterPrice}>от 579 Р</span>
                <CustomButton className='primary'>Выбрать</CustomButton>
            </div>
        </div>
    )
}
