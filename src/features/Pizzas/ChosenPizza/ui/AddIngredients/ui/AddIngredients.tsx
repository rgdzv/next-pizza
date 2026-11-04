'use client'
import { IngredientCard } from 'entities/IngredientCard'
import { getSkeleton } from 'shared/lib'
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
        const ingredientData = {
            id: ingredient.id,
            name: ingredient.name,
            src: ingredient.imgSrc,
            price: ingredient.prices[sizeTypeCombination] ?? 0
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

    const skeleton = getSkeleton('extraIngredientSkeleton', 6)

    const extraIngredientsCondition = isAddonsLoading ? (
        <div className={styles.pizzaAddIngredients}>{skeleton}</div>
    ) : extraIngredientsError ? (
        <div className={styles.pizzaAddIngredientsError}>
            {extraIngredientsError}
        </div>
    ) : (
        <div className={styles.pizzaAddIngredients}>{finalIngredients}</div>
    )

    return (
        <div
            className={styles.pizzaInfoAddIngredients}
            data-testid='add-ingredients'
        >
            <span className={styles.pizzaInfoAddIngredientsTitle}>
                Добавить по вкусу
            </span>
            {extraIngredientsCondition}
        </div>
    )
}
