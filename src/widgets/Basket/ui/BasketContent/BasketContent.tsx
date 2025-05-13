import { ArrowRightIcon, CleanIcon } from 'shared/assets'
import { CustomButton } from 'shared/ui'
import { BasketPizzaCard } from 'entities/BasketPizzaCard'
import styles from './BasketContent.module.scss'
import type { FC } from 'react'

interface BasketContentPropsInterface {
    productQuantity: string
    basketFinalSum: string
    basketFinalSumTax: string
}

export const BasketContent: FC<BasketContentPropsInterface> = ({
    productQuantity,
    basketFinalSum,
    basketFinalSumTax
}) => {
    return (
        <div className={styles.basketContent}>
            <div className={styles.basketContentHeader}>
                <div className={styles.basketContentHeaderLeft}>
                    <span>
                        В корзине <strong>{productQuantity}</strong>
                    </span>
                </div>
                <CustomButton className='clean'>
                    <CleanIcon />
                </CustomButton>
            </div>
            <div className={styles.basketContentList}>
                <BasketPizzaCard src='' alt='' />
                <BasketPizzaCard src='' alt='' />
                <BasketPizzaCard src='' alt='' />
            </div>
            <div className={styles.basketContentFooter}>
                <div className={styles.basketFooterSumInfo}>
                    <div className={styles.basketContentFooterSum}>
                        <span>Итого :</span>
                        <span>{basketFinalSum}</span>
                    </div>
                    <div className={styles.basketContentFooterTax}>
                        <span>Налог 5% :</span>
                        <span>{basketFinalSumTax}</span>
                    </div>
                </div>
                <CustomButton className='primary'>
                    <span>Оформить заказ</span>
                    <ArrowRightIcon title='Вправо' />
                </CustomButton>
            </div>
        </div>
    )
}
