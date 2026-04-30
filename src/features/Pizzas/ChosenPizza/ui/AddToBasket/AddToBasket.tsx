'use client'
import { useState } from 'react'
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
    const [orderIsSending, setOrderIsSending] = useState(false)

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

    const updateButtonContent = () => {
        setOrderIsSending(true)
        setTimeout(() => {
            setOrderIsSending(true)
        }, 1500)
    }

    const handleAddPizzaToBasket = () => {
        addPizzaToBasket(pizzaToBasket)
        updateButtonContent()
        setTimeout(() => {
            closeModal()
        }, 2000)
    }

    const formattedPrice = priceFormat(pizzaPrice)
    const buttonContentCondition = orderIsSending
        ? 'Отправляем в корзину...'
        : `В корзину за ${formattedPrice}`

    return (
        <div className={styles.pizzaPriceButton}>
            <CustomButton
                className='price'
                onClick={handleAddPizzaToBasket}
                disabled={orderIsSending}
            >
                {buttonContentCondition}
            </CustomButton>
        </div>
    )
}
