'use client'
import { useState } from 'react'
import { useBasketPizza } from 'features/Pizzas/BasketPizzas'
import { PizzaSize, PizzaType } from 'entities/PizzaCard'
import { CustomButton } from 'shared/ui'
import { priceFormat } from 'shared/lib'
import { useChosenPizza } from '../../lib/hooks/useChosenPizza'
import { useSizeType } from '../../lib/hooks/useSizeType'
import { useIngredients } from '../../lib/hooks/useIngredients'
import styles from './AddToBasket.module.scss'
import type { FC } from 'react'

interface AddToBasketPropsInterface {
    closeDialog: () => void
}

export const AddToBasket: FC<AddToBasketPropsInterface> = ({ closeDialog }) => {
    const { chosenPizza } = useChosenPizza()
    const { ingredients, pizzaIngredientPrice, setIngredient } =
        useIngredients()
    const { pizzaSize, pizzaType, setPizzaSize, setPizzaType } = useSizeType()
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
        count: 1,
        ingredients: ingredients.map(
            (item) => item.charAt(0).toLowerCase() + item.slice(1)
        )
    }

    const updateButtonContent = () => {
        setOrderIsSending(true)
        setTimeout(() => {
            setOrderIsSending(true)
        }, 300)
    }

    const handleAddPizzaToBasket = () => {
        addPizzaToBasket(pizzaToBasket)
        updateButtonContent()
        setTimeout(() => {
            closeDialog()
            setPizzaSize(PizzaSize.MIDDLE)
            setPizzaType(PizzaType.TRADITIONAL)
            setIngredient(null)
        }, 500)
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
