import { BasketEmpty } from '../BasketEmpty/BasketEmpty'
import styles from './Basket.module.scss'
import type { FC } from 'react'

export const Basket: FC = () => {
    return (
        <div className={styles.basketOverlay}>
            <div className={styles.basketSideBar}>
                <BasketEmpty />
            </div>
        </div>
    )
}
