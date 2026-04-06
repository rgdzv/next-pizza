'use client'
import { useState } from 'react'
import { IngredientCard } from 'entities/IngredientCard'
import { PizzaSize, PizzaType } from 'entities/PizzaCard'
import {
    ADDITIONAL_INGREDIENTS,
    ADDITIONAL_INGREDIENTS_PRICES,
    DEFAULT_PRICE
} from '../lib/const/ingredients'
import { useChosenPizza } from '../../../lib/hooks/useChosenPizza'
import styles from './AddIngredients.module.scss'
import type { FC } from 'react'

export const AddIngredients: FC = () => {
    const {
        pizzaSize,
        pizzaType,
        setPlusIngredientPrice,
        setMinusIngredientPrice
    } = useChosenPizza()
    const [isAdded, setIsAdded] = useState<Record<string, boolean>>({})

    const addIngredient = (ingName: string) => {
        setIsAdded((prev) => ({
            ...prev,
            [ingName]: !prev[ingName]
        }))
    }

    const shouldShowAllIngredients =
        pizzaType === PizzaType.TRADITIONAL &&
        (pizzaSize === PizzaSize.MIDDLE || pizzaSize === PizzaSize.LARGE)

    const sizeTypeCombination = `${pizzaType}_${pizzaSize}`

    const filteredIngredients = ADDITIONAL_INGREDIENTS.filter(
        (_, index) => shouldShowAllIngredients || index !== 0
    )

    const finalIngredients = filteredIngredients.map((ingredient) => {
        const priceCombination =
            ADDITIONAL_INGREDIENTS_PRICES[ingredient.id][sizeTypeCombination] ??
            DEFAULT_PRICE

        const handleAddIngredient = () => {
            addIngredient(ingredient.name)
            if (!isAdded[ingredient.name]) {
                setPlusIngredientPrice(Number(priceCombination))
            }
            if (isAdded[ingredient.name]) {
                setMinusIngredientPrice(Number(priceCombination))
            }
        }

        const ingredientData = {
            id: ingredient.id,
            name: ingredient.name,
            src: ingredient.src,
            price: priceCombination
        }

        return (
            <IngredientCard
                key={ingredient.id}
                ingredient={ingredientData}
                handleAddIngredient={handleAddIngredient}
                ingredientAdded={isAdded[ingredient.name]}
            ></IngredientCard>
        )
    })

    return (
        <div className={styles.pizzaInfoAddIngredients}>
            <span className={styles.pizzaInfoAddIngredientsTitle}>
                Добавить по вкусу
            </span>
            <div className={styles.pizzaAddIngredients}>{finalIngredients}</div>
        </div>
    )
}
