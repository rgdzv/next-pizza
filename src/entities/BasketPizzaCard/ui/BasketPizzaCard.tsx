import { CustomButton, CustomImage } from 'shared/ui'
import { CrossIcon, MinusIcon, PlusIcon } from 'shared/assets'
import { priceFormat } from 'shared/lib'
import styles from './BasketPizzaCard.module.scss'
import type { BasketPizza } from '../lib/types/basketPizza'
import type { FC } from 'react'

interface BasketPizzaCardPropsInterface {
    pizza: BasketPizza
    addPizzaToBasket: (pizza: BasketPizza) => void
    removePizzaFromBasket: (
        pizza: BasketPizza,
        removeImmediately?: boolean
    ) => void
}

export const BasketPizzaCard: FC<BasketPizzaCardPropsInterface> = ({
    pizza,
    addPizzaToBasket,
    removePizzaFromBasket
}) => {
    const handleAddPizza = () => {
        addPizzaToBasket(pizza)
    }

    const handleMinusPizza = () => {
        removePizzaFromBasket(pizza)
    }

    const handleRemovePizzaImmediately = () => {
        removePizzaFromBasket(pizza, true)
    }

    const formattedPrice = priceFormat(pizza.totalPriceForCount as number)

    return (
        <div className={styles.basketPizzaCard}>
            <div className={styles.basketPizzaCardTop}>
                <CustomImage
                    src={pizza.imgSrc}
                    alt={pizza.title}
                    className='basketPizzaCard'
                />
                <div className={styles.basketPizzaCardInfo}>
                    <span className={styles.basketPizzaCardInfoTitle}>
                        {pizza.title}
                    </span>
                    <span className={styles.basketPizzaCardInfoSubtitle}>
                        {pizza.size} см,{' '}
                        {pizza.type === 'traditional'
                            ? 'традиционное '
                            : 'тонкое '}
                        тесто, {pizza.weight} г
                    </span>
                </div>
            </div>
            <div className={styles.basketPizzaCardFooter}>
                <span className={styles.basketPizzaCardSum}>
                    {formattedPrice}
                </span>
                <div className={styles.basketPizzaCardCountBtn}>
                    <CustomButton
                        className='counter'
                        onClick={handleMinusPizza}
                    >
                        <MinusIcon title='Убавить' />
                    </CustomButton>
                    <span>{pizza.count}</span>
                    <CustomButton
                        className='counter'
                        onClick={handleAddPizza}
                        disabled={pizza.count >= 20}
                    >
                        <PlusIcon title='Прибавить' />
                    </CustomButton>
                </div>
            </div>
            <div className={styles.basketPizzaCardButton}>
                <CustomButton
                    className='delete'
                    onClick={handleRemovePizzaImmediately}
                >
                    <CrossIcon title='Удалить' />
                </CustomButton>
            </div>
        </div>
    )
}
