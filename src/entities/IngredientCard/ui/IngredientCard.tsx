import { CustomButton } from 'shared/ui'
import type { FC } from 'react'

interface IngredientCardPropsInterface {
    item: Record<string, string>
}

export const IngredientCard: FC<IngredientCardPropsInterface> = ({ item }) => {
    return (
        <CustomButton className='ingredientCard'>
            {/* <img src='https://cdn.dodostatic.net/static/Img/Ingredients/0199152f20c570859ff617c0a6ef03d3.png' alt={item.name}/> */}
            <span>{item.name}</span>
            <span>{item.price} ₽</span>
        </CustomButton>
    )
}
