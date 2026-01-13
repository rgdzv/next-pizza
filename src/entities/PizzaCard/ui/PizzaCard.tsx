import { memo, type FC } from 'react'
import { CustomButton, CustomImage } from 'shared/ui'
import styles from './PizzaCard.module.scss'
import type { Pizza } from '../lib/types/pizza'

interface PizzaCardPropsInterface {
    pizza: Pizza
    pizzaCardPrice: string
    handleSelectPizza: () => void
}

export const PizzaCard: FC<PizzaCardPropsInterface> = memo(
    ({ pizza, pizzaCardPrice, handleSelectPizza }) => {
        return (
            <article className={styles.pizzaCard}>
                <CustomImage
                    src={pizza.imgSrc}
                    alt={pizza.title}
                    className='pizzaCard'
                    sizes='209px 209px'
                />
                <p className={styles.pizzaCardName}>{pizza.title}</p>
                <p className={styles.pizzaCardRating}>
                    Рейтинг: {pizza.rating}
                </p>
                <p className={styles.pizzaCardStructure}>{pizza.description}</p>
                <div className={styles.pizzaCardFooter}>
                    <span className={styles.pizzaCardFooterPrice}>
                        от {pizzaCardPrice}
                    </span>
                    <CustomButton
                        className='primary'
                        onClick={handleSelectPizza}
                    >
                        Выбрать
                    </CustomButton>
                </div>
            </article>
        )
    }
)
