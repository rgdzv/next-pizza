import { ArrowRightIcon } from 'shared/assets'
import { CustomButton } from 'shared/ui'
import styles from './BasketContent.module.scss'
import type { FC, ReactNode } from 'react'

interface BasketContentPropsInterface {
    productQuantity: string
    basketFinalSum: string
    basketFinalSumTax: string
    pizzas: ReactNode
}

export const BasketContent: FC<BasketContentPropsInterface> = ({
    productQuantity,
    basketFinalSum,
    basketFinalSumTax,
    pizzas
}) => {
    return (
        <div className={styles.basketContent}>
            <div className={styles.basketContentHeader}>
                <span>
                    <strong>
                        {productQuantity} на {basketFinalSum}
                    </strong>
                </span>
            </div>
            <div className={styles.basketContentList}>{pizzas}</div>
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
