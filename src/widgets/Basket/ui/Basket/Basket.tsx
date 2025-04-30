import cn from 'classnames'
import { BasketEmpty } from '../BasketEmpty/BasketEmpty'
import styles from './Basket.module.scss'
import type { FC } from 'react'

interface BasketPropsInterface {
    opened: boolean
    handleClose: () => void
}

export const Basket: FC<BasketPropsInterface> = ({ opened, handleClose }) => {
    const basketOverlayClassName = cn(styles.basketOverlay, {
        [styles.opened]: opened,
        [styles.closed]: !opened
    })

    return (
        <div className={basketOverlayClassName}>
            <div className={styles.basketSideBar}>
                <BasketEmpty handleClose={handleClose} />
            </div>
        </div>
    )
}
