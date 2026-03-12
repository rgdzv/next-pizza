import { CustomButton, CustomImage } from 'shared/ui'
import { IngredientAdded } from 'shared/assets'
import type { IngredientInfo } from '../lib/types/ingredientInfo'
import type { FC } from 'react'

interface IngredientCardPropsInterface {
    ingredient: IngredientInfo
    handleAddIngredient: () => void
    ingredientAdded: boolean
}

export const IngredientCard: FC<IngredientCardPropsInterface> = ({
    ingredient,
    handleAddIngredient,
    ingredientAdded
}) => {
    return (
        <CustomButton
            className='ingredientCard'
            ingredientAdded={ingredientAdded}
            onClick={handleAddIngredient}
        >
            <IngredientAdded title='Добавлено' />
            <CustomImage
                className='pizzaIngredient'
                src={ingredient.src}
                alt={ingredient.name}
            />
            <span>{ingredient.name}</span>
            <span>{ingredient.price} ₽</span>
        </CustomButton>
    )
}
