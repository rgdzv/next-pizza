'use client'
import { useState } from 'react'
import { getPizzaVariant, PIZZA_SIZES, PIZZA_TYPES } from 'entities/PizzaCard'
import { CustomButton } from 'shared/ui'
import { priceFormat } from 'shared/lib'
import { useChosenPizza } from '../../lib/hooks/useChosenPizza'
import { useSizeType } from '../../lib/hooks/useSizeType'
import { useIngredients } from '../../lib/hooks/useIngredients'
import { useBasketPizza } from '../../../BasketPizzas/lib/hooks/useBasketPizza'
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

    const selectedVariant = getPizzaVariant(chosenPizza, pizzaType, pizzaSize)

    const pizzaPrice = (selectedVariant?.price ?? 0) + pizzaIngredientPrice

    const pizzaToBasket = {
        id: chosenPizza?.id ?? '',
        imgSrc: chosenPizza?.imgSrc ?? '',
        title: chosenPizza?.title ?? '',
        size: pizzaSize,
        type: pizzaType,
        price: pizzaPrice,
        weight: selectedVariant?.weight ?? 0,
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
            setPizzaSize(PIZZA_SIZES.MIDDLE)
            setPizzaType(PIZZA_TYPES.TRADITIONAL)
            setIngredient(null)
        }, 500)
    }

    const formattedPrice = priceFormat(pizzaPrice)
    const buttonContentCondition = orderIsSending
        ? 'Отправляем в корзину...'
        : `В корзину за ${formattedPrice}`

    return (
        <div className={styles.pizzaPriceButton} data-testid='add-to-basket'>
            <CustomButton
                variant='price'
                onClick={handleAddPizzaToBasket}
                disabled={orderIsSending}
            >
                {buttonContentCondition}
            </CustomButton>
        </div>
    )
}
