import { CustomButton } from 'shared/ui'
import { useChosenPizza } from '../../lib/hooks/useChosenPizza'
import styles from './AddToBasket.module.scss'
import type { FC } from 'react'

export const AddToBasket: FC = () => {
    const { chosenPizza, pizzaSize, pizzaType, pizzaIngredientPrice } =
        useChosenPizza()

    const pizzaPrice =
        Number(chosenPizza?.details[pizzaType][pizzaSize].price) +
        pizzaIngredientPrice

    return (
        <div className={styles.pizzaPriceButton}>
            <CustomButton className='price'>
                В корзину за {pizzaPrice} ₽
            </CustomButton>
        </div>
    )
}
