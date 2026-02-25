import { CustomButton } from 'shared/ui'
import { IngredientAdded } from 'shared/assets'
import type { FC, ReactNode } from 'react'

interface IngredientCardPropsInterface {
    item: Record<string, string>
    handleAddIngredient: () => void
    ingredientAdded: boolean
    ingredientImage: ReactNode
}

export const IngredientCard: FC<IngredientCardPropsInterface> = ({
    item,
    handleAddIngredient,
    ingredientAdded,
    ingredientImage
}) => {
    return (
        <CustomButton
            className='ingredientCard'
            ingredientAdded={ingredientAdded}
            onClick={handleAddIngredient}
        >
            <IngredientAdded title='Добавлено' />
            {ingredientImage}
            <span>{item.name}</span>
            <span>{item.price} ₽</span>
        </CustomButton>
    )
}
