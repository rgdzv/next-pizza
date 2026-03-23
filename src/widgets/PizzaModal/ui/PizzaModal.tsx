import { useEffect, useState } from 'react'
import {
    AddIngredients,
    ChooseSizeType,
    RemoveIngredients,
    ShowCalories
} from 'features/Pizzas/ChosenPizzaInteract'
import { PizzaSize, PizzaType } from 'entities/PizzaCard'
import { CustomButton, CustomImage, Dialog } from 'shared/ui'
import { CrossIcon, LargeTemplate, MiddleTemplate } from 'shared/assets'
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
    const [pizzaSize, setPizzaSize] = useState<PizzaSizeKeys>(PizzaSize.MIDDLE)
    const [pizzaType, setPizzaType] = useState<PizzaTypeKeys>(
        PizzaType.TRADITIONAL
    )

    const setSize = (size: PizzaSizeKeys) => {
        setPizzaSize(size)
    }

    const setType = (type: PizzaTypeKeys) => {
        setPizzaType(type)
    }

    const nutritionValue = selectedPizza?.details[pizzaType][pizzaSize]
        .nutrition as Nutrition

    const pizzaPrice = selectedPizza?.details[pizzaType][pizzaSize].price

    const pizzaModalImage = selectedPizza?.details[pizzaType][pizzaSize]
        .img as string

    const pizzaModalImageClassName =
        pizzaSize === PizzaSize.EXTRA_SMALL
            ? 'pizzaModalExtraSmall'
            : pizzaSize === PizzaSize.SMALL
              ? 'pizzaModalSmall'
              : pizzaSize === PizzaSize.MIDDLE
                ? 'pizzaModalMiddle'
                : 'pizzaModalLarge'

    const middleTemplateShowCondition = pizzaSize === PizzaSize.EXTRA_SMALL && (
        <div className={styles.pizzaImageMiddleTemplate}>
            <MiddleTemplate />
        </div>
    )

    const smallTemplateShowCondition = (pizzaSize === PizzaSize.EXTRA_SMALL ||
        pizzaSize === PizzaSize.SMALL) && (
        <div className={styles.pizzaImageLargeTemplate}>
            <LargeTemplate />
        </div>
    )

    useEffect(() => {
        if (!isModalOpen) {
            setPizzaSize(PizzaSize.MIDDLE)
            setPizzaType(PizzaType.TRADITIONAL)
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
                <div className={styles.pizzaImage}>
                    <CustomImage
                        className={pizzaModalImageClassName}
                        src={pizzaModalImage}
                        alt={pizzaModalImage}
                    />
                    {middleTemplateShowCondition}
                    {smallTemplateShowCondition}
                </div>
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
                    <ChooseSizeType
                        pizzaSize={pizzaSize}
                        pizzaType={pizzaType}
                        setSize={setSize}
                        setType={setType}
                    />
                    <span className={styles.pizzaInfoAddIngredients}>
                        Добавить по вкусу
                    </span>
                    <AddIngredients
                        pizzaType={pizzaType}
                        pizzaSize={pizzaSize}
                    />
                    <div className={styles.pizzaPriceButton}>
                        <CustomButton className='price'>
                            В корзину за {pizzaPrice} ₽
                        </CustomButton>
                    </div>
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
