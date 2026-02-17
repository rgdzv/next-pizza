import { useEffect, useState } from 'react'
import {
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
    const [subtitleSize, setSubtitleSize] = useState<PizzaSizeKeys>('30')
    const [subtitleType, setSubtitleType] =
        useState<PizzaTypeKeys>('традиционное')

    const setSize = (size: PizzaSizeKeys) => {
        setSubtitleSize(size)
    }

    const setType = (type: PizzaTypeKeys) => {
        setSubtitleType(type)
    }

    const nutritionValue = selectedPizza?.details[subtitleType][subtitleSize]
        .nutrition as Nutrition

    useEffect(() => {
        if (!isModalOpen) {
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
                        {subtitleSize} см, {subtitleType} тесто,&nbsp;
                        {nutritionValue.weight} г
                    </span>
                    <RemoveIngredients selectedPizza={selectedPizza} />
                    <ChooseSizeType setSize={setSize} setType={setType} />
                    <span className={styles.pizzaInfoAddIngredients}>
                        Добавить по вкусу
                    </span>
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
