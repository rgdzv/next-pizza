import { CustomButton, CustomImage } from 'shared/ui'
import { IngredientAdded } from 'shared/assets'
import type { FC } from 'react'

interface IngredientCardPropsInterface {
    item: Record<string, string>
    addIngredient: (ingName: string) => void
    ingredientAdded: boolean
}

export const IngredientCard: FC<IngredientCardPropsInterface> = ({
    item,
    addIngredient,
    ingredientAdded
}) => {
    return (
        <CustomButton
            className='ingredientCard'
            ingredientAdded={ingredientAdded}
            onClick={() => {
                addIngredient(item.name)
            }}
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
