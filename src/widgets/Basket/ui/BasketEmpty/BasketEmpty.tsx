import { CustomImage, CustomLink } from 'shared/ui'
import { ArrowLeftIcon, BasketEmptyIcon } from 'shared/assets'
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
                <span className={styles.basketName}>Корзина пустая</span>
                <span className={styles.basketMessage}>
                    Добавьте хотя бы одну пиццу, чтобы совершить заказ
                </span>
                <CustomLink href='/' className='primary'>
                    <ArrowLeftIcon title='Влево' />
                    <span>Вернуться назад</span>
                </CustomLink>
            </div>
        </div>
    )
}
