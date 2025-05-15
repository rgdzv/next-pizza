import { CustomImage } from 'shared/ui'
import styles from './BasketPizzaCard.module.scss'
import type { BasketPizza } from '../lib/types/basketPizza'
import type { FC } from 'react'

interface BasketPizzaCardPropsInterface {
    pizza: BasketPizza
}

export const BasketPizzaCard: FC<BasketPizzaCardPropsInterface> = ({
    pizza
}) => {
    return (
        <div className={styles.basketPizzaCard}>
            <CustomImage
                src={pizza.imgSrc}
                alt={pizza.title}
                className='basketPizzaCard'
            />
            <div className={styles.basketPizzaCardRight}>
                <div className={styles.basketPizzaCardInfo}>
                    <span className={styles.basketPizzaCardInfoTitle}>
                        {pizza.title}
                    </span>
                    <span className={styles.basketPizzaCardInfoSubtitle}>
                        {pizza.description}
                    </span>
                </div>
                <div className={styles.basketPizzaCardFooter}>
                    <div>empty</div>
                    <span className={styles.basketPizzaCardSum}>
                        {pizza.price} ₽
                    </span>
                </div>
            </div>
        </div>
    )
}
