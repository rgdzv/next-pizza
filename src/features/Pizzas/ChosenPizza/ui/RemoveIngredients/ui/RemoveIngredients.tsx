'use client'
import { Fragment, useState } from 'react'
import { RemoveIngredient, ReturnIngredient } from 'shared/assets'
import { CustomButton } from 'shared/ui'
import { useChosenPizza } from '../../../lib/hooks/useChosenPizza'
import styles from './RemoveIngredients.module.scss'
import type { FC } from 'react'

export const RemoveIngredients: FC = () => {
    const [isRemoved, setIsRemoved] = useState<Record<string, boolean>>()
    const { chosenPizza } = useChosenPizza()

    const removeIngredient = (ingName: string) => {
        setIsRemoved((prev) => ({
            ...prev,
            [ingName]: !prev?.[ingName]
        }))
    }

    const ingredients = chosenPizza?.ingredients.map((ingredient, index) => {
        if (ingredient.removable) {
            const handleRemoveIngredient = () => {
                removeIngredient(ingredient.name)
            }

            const removeImgCondition = isRemoved?.[ingredient.name] ? (
                <ReturnIngredient title='Вернуть' />
            ) : (
                <RemoveIngredient title='Убрать' />
            )

            return (
                <Fragment key={ingredient.name}>
                    <CustomButton
                        className='ingredient'
                        onClick={handleRemoveIngredient}
                        ingredientRemoved={isRemoved?.[ingredient.name]}
                    >
                        {ingredient.name}&nbsp;
                    </CustomButton>
                    {removeImgCondition}
                    {', '}
                </Fragment>
            )
        }

        const commaAfterIngCondition =
            index === chosenPizza.ingredients.length - 1
                ? ingredient.name
                : `${ingredient.name}, `

        return commaAfterIngCondition
    })

    return (
        <div className={styles.pizzaInfoRemoveIngredients}>{ingredients}</div>
    )
}
