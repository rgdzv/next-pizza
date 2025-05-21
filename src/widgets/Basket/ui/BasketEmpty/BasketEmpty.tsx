import { CustomImage } from 'shared/ui'
import { BasketEmptyIcon } from 'shared/assets'
import styles from './BasketEmpty.module.scss'
import type { FC } from 'react'

export const BasketEmpty: FC = () => {
    return (
        <div className={styles.basketEmptyBlockWrapper}>
            <div className={styles.basketEmptyBlock}>
                <CustomImage
                    src={BasketEmptyIcon}
                    className='basketEmpty'
                    alt='Корзина'
                />
                <span className={styles.basketEmptyName}>Корзина пустая</span>
                <span className={styles.basketEmptyMessage}>
                    Добавьте хотя бы одну пиццу, чтобы совершить заказ
                </span>
            </div>
        </div>
    )
}
