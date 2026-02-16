import { Fragment, useState } from 'react'
import { RemoveIngredient, ReturnIngredient } from 'shared/assets'
import { CustomButton } from 'shared/ui'
import styles from './RemoveIngredients.module.scss'
import type { FC } from 'react'
import type { Pizza } from 'entities/PizzaCard'

interface RemoveIngredientsPropsInterface {
    selectedPizza: Pizza | null
}

export const RemoveIngredients: FC<RemoveIngredientsPropsInterface> = ({
    selectedPizza
}) => {
    const [isRemoved, setIsRemoved] = useState<Record<string, boolean>>()

    const toggleIngredient = (ingName: string) => {
        setIsRemoved((prev) => ({
            ...prev,
            [ingName]: !prev?.[ingName]
        }))
    }

    const ingredients = selectedPizza?.ingredients.map((ingredient, index) => {
        if (ingredient.removable) {
            const handleToggleIngredient = () => {
                toggleIngredient(ingredient.name)
            }

            const removeImgCondition = isRemoved?.[ingredient.name] ? (
                <ReturnIngredient title='Вернуть' />
            ) : (
                <RemoveIngredient title='Убрать' />
            )

            const commaAfterBtnIngCondition =
                index < selectedPizza.ingredients.length - 1 ? ', ' : ''

            return (
                <Fragment key={ingredient.name}>
                    <CustomButton
                        className='ingredient'
                        onClick={handleToggleIngredient}
                        ingredientRemoved={isRemoved?.[ingredient.name]}
                    >
                        {ingredient.name}&nbsp;
                    </CustomButton>
                    {removeImgCondition}
                    {commaAfterBtnIngCondition}
                </Fragment>
            )
        }

        const commaAfterIngCondition =
            index === selectedPizza.ingredients.length - 1
                ? ingredient.name
                : `${ingredient.name}, `

        return commaAfterIngCondition
    })

    return <div className={styles.pizzaIngredients}>{ingredients}</div>
}
