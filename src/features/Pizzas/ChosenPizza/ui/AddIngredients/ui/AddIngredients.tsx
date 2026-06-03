'use client'
import { useEffect } from 'react'
import { IngredientCard } from 'entities/IngredientCard'
import {
    ADDITIONAL_INGREDIENTS,
    ADDITIONAL_INGREDIENTS_PRICES,
    DEFAULT_PRICE
} from '../lib/const/ingredients'
import { useSizeType } from '../../../lib/hooks/useSizeType'
import { useIngredients } from '../../../lib/hooks/useIngredients'
import styles from './AddIngredients.module.scss'
import type { FC } from 'react'

export const AddIngredients: FC = () => {
    const {
        ingredients,
        setIngredient,
        setPlusIngredientPrice,
        setMinusIngredientPrice,
        setUpdateIngredientPrice
    } = useIngredients()
    const { pizzaSize, pizzaType } = useSizeType()
    const sizeTypeCombination = `${pizzaType}_${pizzaSize}`

    const finalIngredients = ADDITIONAL_INGREDIENTS.map((ingredient) => {
        const priceCombination =
            ADDITIONAL_INGREDIENTS_PRICES[ingredient.id][sizeTypeCombination] ??
            DEFAULT_PRICE

        const handleAddIngredient = () => {
            setIngredient(ingredient.name)
            if (!ingredients.includes(ingredient.name)) {
                setPlusIngredientPrice(Number(priceCombination))
            }
            if (ingredients.includes(ingredient.name)) {
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
                ingredientAdded={ingredients.includes(ingredient.name)}
            ></IngredientCard>
        )
    })

    useEffect(() => {
        const totalPrice = ingredients.reduce((sum, ingredientName) => {
            if (!ingredientName) return sum
            const ingredient = ADDITIONAL_INGREDIENTS.find(
                (ing) => ing.name === ingredientName
            )
            if (!ingredient) return sum
            const price =
                ADDITIONAL_INGREDIENTS_PRICES[ingredient.id][
                    sizeTypeCombination
                ] ?? DEFAULT_PRICE
            return sum + Number(price)
        }, 0)

        setUpdateIngredientPrice(totalPrice)
    }, [pizzaSize, ingredients, sizeTypeCombination, setUpdateIngredientPrice])

    return (
        <div className={styles.pizzaInfoAddIngredients}>
            <span className={styles.pizzaInfoAddIngredientsTitle}>
                Добавить по вкусу
            </span>
            <div className={styles.pizzaAddIngredients}>{finalIngredients}</div>
        </div>
    )
}
