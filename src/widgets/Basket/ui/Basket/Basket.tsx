import cn from 'classnames'
import { BasketEmpty } from '../BasketEmpty/BasketEmpty'
import styles from './Basket.module.scss'
import type { FC } from 'react'

interface BasketPropsInterface {
    opened: boolean
    handleOpened: () => void
}

export const Basket: FC<BasketPropsInterface> = ({ opened, handleOpened }) => {
    const basketOverlayClassName = cn(styles.basketOverlay, {
        [styles.opened]: opened,
        [styles.closed]: !opened
    })

    return (
        <div className={basketOverlayClassName}>
            <div className={styles.basketSideBar}>
                <BasketEmpty handleOpened={handleOpened} />
            </div>
        </div>
    )
}
