import { CustomImage } from 'shared/ui'
import styles from './BasketPizzaCard.module.scss'
import type { FC } from 'react'

interface BasketPizzaCardPropsInterface {
    src: string
    alt: string
}

export const BasketPizzaCard: FC<BasketPizzaCardPropsInterface> = ({
    src,
    alt
}) => {
    return (
        <div className={styles.basketPizzaCard}>
            <CustomImage src={src} alt={alt} className='basketPizzaCard' />
            <div className={styles.basketPizzaCardRight}>
                <div className={styles.basketPizzaCardRightInfo}>
                    <span className={styles.basketPizzaCardRightInfoTitle}>
                        Чизбургер-пицца
                    </span>
                    <span className={styles.basketPizzaCardRightInfoSubtitle}>
                        Средняя 30 см, традиционное тесто
                    </span>
                </div>
                <div className={styles.basketPizzaCardRightFooter}>
                    <div>empty</div>
                    <span className={styles.basketPizzaCardRightFooterSum}>
                        500 Р
                    </span>
                </div>
            </div>
        </div>
    )
}
