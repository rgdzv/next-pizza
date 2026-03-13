import { useState } from 'react'
import { IngredientCard } from 'entities/IngredientCard'
import { PizzaSize, PizzaType } from 'entities/PizzaCard'
import {
    ADDITIONAL_INGREDIENTS,
    ADDITIONAL_INGREDIENTS_PRICES,
    DEFAULT_PRICE
} from '../lib/const/ingredients'
import styles from './AddIngredients.module.scss'
import type { FC } from 'react'
import type { PizzaSizeKeys, PizzaTypeKeys } from 'entities/PizzaCard'

interface AddIngredientsPropsInterface {
    pizzaSize: PizzaSizeKeys
    pizzaType: PizzaTypeKeys
}

export const AddIngredients: FC<AddIngredientsPropsInterface> = ({
    pizzaSize,
    pizzaType
}) => {
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

    return <div className={styles.addIngredients}>{finalIngredients}</div>
}
