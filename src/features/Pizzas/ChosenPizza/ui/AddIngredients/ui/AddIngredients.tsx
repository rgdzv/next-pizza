'use client'
import { useEffect, useState } from 'react'
import { IngredientCard } from 'entities/IngredientCard'
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
        setMinusIngredientPrice,
        setUpdateIngredientPrice
    } = useChosenPizza()
    const [isAdded, setIsAdded] = useState<Record<string, boolean>>({})

    const addIngredient = (ingName: string) => {
        setIsAdded((prev) => ({
            ...prev,
            [ingName]: !prev[ingName]
        }))
    }

    const sizeTypeCombination = `${pizzaType}_${pizzaSize}`

    const finalIngredients = ADDITIONAL_INGREDIENTS.map((ingredient) => {
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

    useEffect(() => {
        const totalPrice = Object.entries(isAdded).reduce(
            (sum, [ingredientName, added]) => {
                if (!added) return sum
                const ingredient = ADDITIONAL_INGREDIENTS.find(
                    (ing) => ing.name === ingredientName
                )
                if (!ingredient) return sum
                const price =
                    ADDITIONAL_INGREDIENTS_PRICES[ingredient.id][
                        sizeTypeCombination
                    ] ?? DEFAULT_PRICE
                return sum + Number(price)
            },
            0
        )

        setUpdateIngredientPrice(totalPrice)
    }, [pizzaSize, isAdded, sizeTypeCombination, setUpdateIngredientPrice])

    return (
        <div className={styles.pizzaInfoAddIngredients}>
            <span className={styles.pizzaInfoAddIngredientsTitle}>
                Добавить по вкусу
            </span>
            <div className={styles.pizzaAddIngredients}>{finalIngredients}</div>
        </div>
    )
}
