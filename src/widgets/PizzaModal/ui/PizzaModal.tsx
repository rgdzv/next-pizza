import { useEffect, useState } from 'react'
import {
    AddIngredients,
    ChooseSizeType,
    RemoveIngredients,
    ShowCalories
} from 'features/Pizzas/ChosenPizzaInteract'
import { CustomButton, Dialog } from 'shared/ui'
import { CrossIcon } from 'shared/assets'
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
    const [pizzaSize, setPizzaSize] = useState<PizzaSizeKeys>('30')
    const [pizzaType, setPizzaType] = useState<PizzaTypeKeys>('традиционное')

    const setSize = (size: PizzaSizeKeys) => {
        setPizzaSize(size)
    }

    const setType = (type: PizzaTypeKeys) => {
        setPizzaType(type)
    }

    const nutritionValue = selectedPizza?.details[pizzaType][pizzaSize]
        .nutrition as Nutrition

    useEffect(() => {
        if (!isModalOpen) {
            setPizzaSize('30')
            setPizzaType('традиционное')
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
                        {pizzaSize} см, {pizzaType} тесто,&nbsp;
                        {nutritionValue.weight} г
                    </span>
                    <RemoveIngredients selectedPizza={selectedPizza} />
                    <ChooseSizeType setSize={setSize} setType={setType} />
                    <span className={styles.pizzaInfoAddIngredients}>
                        Добавить по вкусу
                    </span>
                    <AddIngredients />
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
