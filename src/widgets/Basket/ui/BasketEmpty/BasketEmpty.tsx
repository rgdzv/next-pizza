import { CustomImage, CustomButton } from 'shared/ui'
import { ArrowLeftIcon, BasketEmptyIcon } from 'shared/assets'
import styles from './BasketEmpty.module.scss'
import type { FC } from 'react'

interface BasketEmptyPropsInterface {
    closeModal: () => void
}

export const BasketEmpty: FC<BasketEmptyPropsInterface> = ({ closeModal }) => {
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
                <CustomButton className='primary' onClick={closeModal}>
                    <ArrowLeftIcon title='Влево' />
                    <span>Вернуться назад</span>
                </CustomButton>
            </div>
        </div>
    )
}
