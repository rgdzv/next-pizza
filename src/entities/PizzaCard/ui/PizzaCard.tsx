import { CustomButton, CustomImage } from 'shared/ui'
import styles from './PizzaCard.module.scss'
import type { Pizza } from '../lib/types/pizza'
import type { FC } from 'react'

interface PizzaCardPropsInterface {
    pizza: Pizza
    pizzaCardPrice: string
}

export const PizzaCard: FC<PizzaCardPropsInterface> = ({
    pizza,
    pizzaCardPrice
}) => {
    return (
        <div className={styles.pizzaCard}>
            <CustomImage
                src={pizza.imgSrc}
                alt={pizza.title}
                className='pizzaCard'
                sizes='209px 209px'
            />
            <p className={styles.pizzaCardName}>{pizza.title}</p>
            <p className={styles.pizzaCardRating}>Рейтинг: {pizza.rating}</p>
            <p className={styles.pizzaCardStructure}>{pizza.description}</p>
            <div className={styles.pizzaCardFooter}>
                <span className={styles.pizzaCardFooterPrice}>
                    от {pizzaCardPrice}
                </span>
                <CustomButton className='primary'>Выбрать</CustomButton>
            </div>
        </div>
    )
}
