import { Fragment, useEffect, useState } from 'react'
import {
    ChooseSizeType,
    ShowCalories
} from 'features/Pizzas/ChosenPizzaInteract'
import { CustomButton, Dialog } from 'shared/ui'
import { CrossIcon, RemoveIngredient, ReturnIngredient } from 'shared/assets'
import styles from './PizzaModal.module.scss'
import type {
    Nutrition,
    Pizza,
    PizzaSizeKeys,
    PizzaTypeKeys
} from 'entities/PizzaCard'
import type { FC, MouseEvent, RefObject } from 'react'

interface PizzaModalPropsInterface {
    isModalOpen: boolean
    closeModal: () => void
    dialogRef: RefObject<HTMLDialogElement | null>
    onClickOutside: (e: MouseEvent<HTMLDialogElement>) => void
    onClickCloseButton: () => void
    selectedPizza: Pizza | null
}

export const PizzaModal: FC<PizzaModalPropsInterface> = ({
    isModalOpen,
    closeModal,
    dialogRef,
    onClickCloseButton,
    onClickOutside,
    selectedPizza
}) => {
    const [isRemoved, setIsRemoved] = useState<Record<string, boolean>>()
    const [subtitleSize, setSubtitleSize] = useState<PizzaSizeKeys>('30')
    const [subtitleType, setSubtitleType] =
        useState<PizzaTypeKeys>('традиционное')

    const toggleIngredient = (ingName: string) => {
        setIsRemoved((prev) => ({
            ...prev,
            [ingName]: !prev?.[ingName]
        }))
    }

    const setSize = (size: PizzaSizeKeys) => {
        setSubtitleSize(size)
    }

    const setType = (type: PizzaTypeKeys) => {
        setSubtitleType(type)
    }

    const nutritionValue = selectedPizza?.nutrition[subtitleType][
        subtitleSize
    ] as Nutrition

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

    useEffect(() => {
        if (!isModalOpen) {
            setIsRemoved({})
            setSubtitleSize('30')
            setSubtitleType('традиционное')
        }
    }, [isModalOpen])

    if (!isModalOpen) return null

    return (
        <Dialog
            dialogRef={dialogRef}
            onClose={closeModal}
            onClick={onClickOutside}
            className='pizzaModal'
        >
            <div className={styles.pizzaModal}>
                <div className={styles.pizzaImage}></div>
                <div className={styles.pizzaInfo}>
                    <ShowCalories nutritionValue={nutritionValue} />
                    <h1 className={styles.pizzaInfoTitle}>
                        {selectedPizza?.title}
                    </h1>
                    <span className={styles.pizzaInfoSubtitle}>
                        {subtitleSize} см, {subtitleType} тесто,{' '}
                        {nutritionValue.weight} г
                    </span>
                    <div className={styles.pizzaIngredients}>{ingredients}</div>
                    <ChooseSizeType setSize={setSize} setType={setType} />
                </div>
                <CustomButton
                    className='closeModal'
                    onClick={onClickCloseButton}
                >
                    <CrossIcon title='Закрыть окно' />
                </CustomButton>
                {/* <CustomButton
                    className='primary'
                >
                    В корзину за 
                </CustomButton> */}
            </div>
        </Dialog>
    )
}
