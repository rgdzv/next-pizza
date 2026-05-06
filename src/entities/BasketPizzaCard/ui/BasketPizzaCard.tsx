import { CustomButton, CustomImage } from 'shared/ui'
import { CrossIcon, MinusIcon, PlusIcon } from 'shared/assets'
import styles from './BasketPizzaCard.module.scss'
import type { BasketPizza } from '../lib/types/basketPizza'
import type { FC } from 'react'

interface BasketPizzaCardPropsInterface {
    pizza: BasketPizza
    handleAddPizza: () => void
    handleRemovePizza: () => void
    handleRemovePizzaCompletely: () => void
    ingredients: string
    formattedPrice: string
}

export const BasketPizzaCard: FC<BasketPizzaCardPropsInterface> = ({
    pizza,
    handleAddPizza,
    handleRemovePizza,
    handleRemovePizzaCompletely,
    ingredients,
    formattedPrice
}) => {
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
                    {ingredients ? (
                        <>
                            <span className={styles.basketPizzaCardInfoOption}>
                                Дополнительно:
                            </span>
                            <span
                                className={
                                    styles.basketPizzaCardInfoIngredients
                                }
                            >
                                {ingredients}
                            </span>
                        </>
                    ) : null}
                </div>
            </div>
            <div className={styles.basketPizzaCardFooter}>
                <span className={styles.basketPizzaCardSum}>
                    {formattedPrice}
                </span>
                <div className={styles.basketPizzaCardCountBtn}>
                    <CustomButton
                        className='counter'
                        onClick={handleRemovePizza}
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
                    onClick={handleRemovePizzaCompletely}
                >
                    <CrossIcon title='Удалить' />
                </CustomButton>
            </div>
        </div>
    )
}
