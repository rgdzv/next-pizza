import { useBasketPizza } from 'features/Pizzas/BasketPizzas'
import { CustomButton } from 'shared/ui'
import { priceFormat } from 'shared/lib'
import { useChosenPizza } from '../../lib/hooks/useChosenPizza'
import styles from './AddToBasket.module.scss'
import type { FC } from 'react'

interface AddToBasketPropsInterface {
    closeModal: () => void
}

export const AddToBasket: FC<AddToBasketPropsInterface> = ({ closeModal }) => {
    const { chosenPizza, pizzaSize, pizzaType, pizzaIngredientPrice } =
        useChosenPizza()
    const { addPizzaToBasket } = useBasketPizza()

    const pizzaPrice =
        Number(chosenPizza?.details[pizzaType][pizzaSize].price) +
        pizzaIngredientPrice

    const pizzaToBasket = {
        id: `id-${chosenPizza?.id as string}_${pizzaSize}_${pizzaType}_${String(pizzaPrice)}`,
        imgSrc: chosenPizza?.imgSrc as string,
        title: chosenPizza?.title as string,
        size: pizzaSize,
        type: pizzaType,
        price: pizzaPrice,
        weight: chosenPizza?.details[pizzaType][pizzaSize].nutrition
            .weight as string,
        count: 1
    }

    const handleAddPizzaToBasket = () => {
        addPizzaToBasket(pizzaToBasket)
        closeModal()
    }

    return (
        <div className={styles.pizzaPriceButton}>
            <CustomButton className='price' onClick={handleAddPizzaToBasket}>
                В корзину за {priceFormat(pizzaPrice)}
            </CustomButton>
        </div>
    )
}
