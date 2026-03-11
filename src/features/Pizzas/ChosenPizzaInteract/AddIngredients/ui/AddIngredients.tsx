import { useState } from 'react'
import { IngredientCard } from 'entities/IngredientCard'
import {
    ADDITIONAL_INGREDIENTS,
    ADDITIONAL_INGREDIENTS_PRICES
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

    const ingredients = ADDITIONAL_INGREDIENTS.map((item) => {
        const sizeTypeCombination = `${pizzaType}_${pizzaSize}`
        const priceCombination =
            ADDITIONAL_INGREDIENTS_PRICES[item.id][sizeTypeCombination]

        const handleAddIngredient = () => {
            addIngredient(item.name)
        }

        const itemFinal = {
            id: item.id,
            name: item.name,
            src: item.src,
            price: priceCombination
        }

        return (
            <IngredientCard
                key={item.id}
                item={itemFinal}
                handleAddIngredient={handleAddIngredient}
                ingredientAdded={isAdded[item.name]}
            ></IngredientCard>
        )
    })

    return <div className={styles.addIngredients}>{ingredients}</div>
}
