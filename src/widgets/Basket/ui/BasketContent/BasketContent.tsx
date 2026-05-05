import { CustomButton } from 'shared/ui'
import { BigCrossIcon } from 'shared/assets'
import styles from './BasketContent.module.scss'
import type { FC, ReactNode } from 'react'

interface BasketContentPropsInterface {
    basketPizzasLength: string
    basketFinalSum: string
    pizzas: ReactNode
    removeAllPizzas: () => void
}

export const BasketContent: FC<BasketContentPropsInterface> = ({
    basketPizzasLength,
    basketFinalSum,
    pizzas,
    removeAllPizzas
}) => {
    return (
        <div className={styles.basketContent}>
            <div className={styles.basketContentHeader}>
                <span>
                    <strong>
                        {basketPizzasLength} на {basketFinalSum}
                    </strong>
                </span>
                <CustomButton className='remove' onClick={removeAllPizzas}>
                    <BigCrossIcon title='Удалить' />
                </CustomButton>
            </div>
            <div className={styles.basketContentList}>{pizzas}</div>
            <div className={styles.basketContentFooter}>
                <div className={styles.basketFooterSumInfo}>
                    <span>Итого :</span>
                    <span>{basketFinalSum}</span>
                </div>
                <CustomButton className='order'>
                    <span>Оформить заказ</span>
                </CustomButton>
            </div>
        </div>
    )
}
