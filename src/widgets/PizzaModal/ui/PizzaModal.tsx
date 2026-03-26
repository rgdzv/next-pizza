import { useEffect } from 'react'
import {
    AddIngredients,
    ChooseSizeType,
    RemoveIngredients,
    ShowCalories,
    ShowPizzaImage,
    useChosenPizza
} from 'features/Pizzas/ChosenPizza'
import { PizzaSize, PizzaType } from 'entities/PizzaCard'
import { CustomButton, Dialog } from 'shared/ui'
import { CrossIcon } from 'shared/assets'
import styles from './PizzaModal.module.scss'
import type { Nutrition } from 'entities/PizzaCard'
import type { FC, MouseEvent, RefObject } from 'react'

interface PizzaModalPropsInterface {
    isModalOpen: boolean
    closeModal: () => void
    dialogRef: RefObject<HTMLDialogElement | null>
    onClickOutside: (e: MouseEvent<HTMLDialogElement>) => void
    onClickCloseButton: () => void
}

export const PizzaModal: FC<PizzaModalPropsInterface> = ({
    isModalOpen,
    closeModal,
    dialogRef,
    onClickCloseButton,
    onClickOutside
}) => {
    const { chosenPizza, pizzaSize, pizzaType, setPizzaSize, setPizzaType } =
        useChosenPizza()

    const nutritionValue = chosenPizza?.details[pizzaType][pizzaSize]
        .nutrition as Nutrition

    const pizzaPrice = chosenPizza?.details[pizzaType][pizzaSize].price

    const pizzaModalImage = chosenPizza?.details[pizzaType][pizzaSize]
        .img as string

    useEffect(() => {
        if (!isModalOpen) {
            setPizzaSize(PizzaSize.MIDDLE)
            setPizzaType(PizzaType.TRADITIONAL)
        }
    }, [isModalOpen, setPizzaSize, setPizzaType])

    if (!isModalOpen) return null

    return (
        <Dialog
            dialogRef={dialogRef}
            onClose={closeModal}
            onClick={onClickOutside}
            className='pizzaModal'
        >
            <div className={styles.pizzaModal}>
                <ShowPizzaImage
                    pizzaSize={pizzaSize}
                    pizzaModalImage={pizzaModalImage}
                />
                <div className={styles.pizzaInfo}>
                    <ShowCalories nutritionValue={nutritionValue} />
                    <h1 className={styles.pizzaInfoTitle}>
                        {chosenPizza?.title}
                    </h1>
                    <span className={styles.pizzaInfoSubtitle}>
                        {pizzaSize} см, {pizzaType} тесто,&nbsp;
                        {nutritionValue.weight} г
                    </span>
                    <RemoveIngredients selectedPizza={chosenPizza} />
                    <ChooseSizeType
                        pizzaSize={pizzaSize}
                        pizzaType={pizzaType}
                        setSize={setPizzaSize}
                        setType={setPizzaType}
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
