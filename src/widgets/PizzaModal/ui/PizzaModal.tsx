import { useEffect, useState } from 'react'
import {
    ChooseSizeType,
    ShowCalories
} from 'features/Pizzas/ChosenPizzaInteract'
import { CustomButton, Dialog } from 'shared/ui'
import { CrossIcon, RemoveIngredient, ReturnIngredient } from 'shared/assets'
import styles from './PizzaModal.module.scss'
import type { Pizza } from 'entities/PizzaCard'
import type { FC, MouseEvent, RefObject } from 'react'

interface PizzaModalPropsInterface {
    isModalOpen: boolean
    closeModal: () => void
    dialogRef: RefObject<HTMLDialogElement | null>
    onClickOutside: (e: MouseEvent<HTMLDialogElement>) => void
    onClickCloseButton: () => void
    selectedPizza: Pizza | null
}

type RemovedIngredients = Record<string, boolean>

export const PizzaModal: FC<PizzaModalPropsInterface> = ({
    isModalOpen,
    closeModal,
    dialogRef,
    onClickCloseButton,
    onClickOutside,
    selectedPizza
}) => {
    const [isRemoved, setIsRemoved] = useState<RemovedIngredients>()

    const toggleIngredient = (ingName: string) => {
        setIsRemoved((prev) => ({
            ...prev,
            [ingName]: !prev?.[ingName]
        }))
    }

    const ingredients = selectedPizza?.ingredients.map((ingredient, index) => {
        if (ingredient.removable) {
            return (
                <CustomButton
                    key={ingredient.name}
                    className='ingredient'
                    onClick={() => {
                        toggleIngredient(ingredient.name)
                    }}
                    ingredientRemoved={isRemoved?.[ingredient.name]}
                >
                    {ingredient.name}&nbsp;
                    {isRemoved?.[ingredient.name] ? (
                        <ReturnIngredient title='Вернуть' />
                    ) : (
                        <RemoveIngredient title='Убрать' />
                    )}
                </CustomButton>
            )
        }
        return index === selectedPizza.ingredients.length - 1
            ? ingredient.name
            : `${ingredient.name}, `
    })

    useEffect(() => {
        if (!isModalOpen) {
            setIsRemoved({})
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
                    <ShowCalories
                        calories='335'
                        prot='11.2'
                        fat='11.2'
                        carbo='11.2'
                        weight='600'
                    />
                    <h1 className={styles.pizzaInfoTitle}>Пицца с хреном</h1>
                    <span className={styles.pizzaInfoSubtitle}>
                        20 см, традиционное тесто, 250 г
                    </span>
                    <div className={styles.pizzaIngredients}>{ingredients}</div>
                    <ChooseSizeType />
                </div>
                <CustomButton
                    className='closeModal'
                    onClick={onClickCloseButton}
                >
                    <CrossIcon title='Закрыть окно' />
                </CustomButton>
            </div>
        </Dialog>
    )
}
