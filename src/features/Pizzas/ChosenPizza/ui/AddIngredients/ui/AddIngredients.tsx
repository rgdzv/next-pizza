'use client'
import { IngredientCard } from 'entities/IngredientCard'
import { Skeleton } from 'shared/ui'
import { useSizeType } from '../../../lib/hooks/useSizeType'
import { useIngredients } from '../../../lib/hooks/useIngredients'
import { useExtraIngredients } from '../../../lib/hooks/useExtraIngredients'
import styles from './AddIngredients.module.scss'
import type { FC } from 'react'

export const AddIngredients: FC = () => {
    const { extraIngredients, isAddonsLoading, extraIngredientsError } =
        useExtraIngredients()
    const { ingredients, setIngredient } = useIngredients()
    const { pizzaSize, pizzaType } = useSizeType()
    const sizeTypeCombination = `${pizzaType}_${String(pizzaSize)}`

    const finalIngredients = extraIngredients?.map((ingredient) => {
        const priceCombination = ingredient.prices[sizeTypeCombination] ?? 0

        const ingredientData = {
            id: ingredient.id,
            name: ingredient.name,
            src: ingredient.imgSrc,
            price: priceCombination
        }

        const isAdded = ingredients.includes(ingredient.name)

        const handleAddIngredient = () => {
            setIngredient(ingredient.name)
        }

        return (
            <IngredientCard
                key={ingredient.id}
                ingredient={ingredientData}
                handleAddIngredient={handleAddIngredient}
                ingredientAdded={isAdded}
            ></IngredientCard>
        )
    })

    const extraIngredientsSkeleton = new Array(6)
        .fill(0)
        .map((_, index) => (
            <Skeleton key={index} variant='extraIngredientSkeleton' />
        ))

    if (isAddonsLoading) {
        return (
            <div
                className={styles.pizzaInfoAddIngredients}
                data-testid='add-ingredients'
            >
                <span className={styles.pizzaInfoAddIngredientsTitle}>
                    Добавить по вкусу
                </span>
                <div className={styles.pizzaAddIngredients}>
                    {extraIngredientsSkeleton}
                </div>
            </div>
        )
    }

    if (extraIngredientsError) {
        return (
            <div
                className={styles.pizzaInfoAddIngredients}
                data-testid='add-ingredients'
            >
                <span className={styles.pizzaInfoAddIngredientsTitle}>
                    Добавить по вкусу
                </span>
                <div className={styles.pizzaAddIngredientsError}>
                    {extraIngredientsError}
                </div>
            </div>
        )
    }

    return (
        <div
            className={styles.pizzaInfoAddIngredients}
            data-testid='add-ingredients'
        >
            <span className={styles.pizzaInfoAddIngredientsTitle}>
                Добавить по вкусу
            </span>
            <div className={styles.pizzaAddIngredients}>{finalIngredients}</div>
        </div>
    )
}
