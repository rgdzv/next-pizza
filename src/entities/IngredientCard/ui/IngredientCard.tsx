import { CustomButton, CustomImage } from 'shared/ui'
import { IngredientAdded } from 'shared/assets'
import type { FC } from 'react'

interface IngredientCardPropsInterface {
    item: Record<string, string>
    handleAddIngredient: () => void
    ingredientAdded: boolean
}

export const IngredientCard: FC<IngredientCardPropsInterface> = ({
    item,
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
                src={item.src}
                alt={item.name}
            />
            <span>{item.name}</span>
            <span>{item.price} ₽</span>
        </CustomButton>
    )
}
