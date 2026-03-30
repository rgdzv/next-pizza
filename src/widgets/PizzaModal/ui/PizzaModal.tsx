import { useEffect } from 'react'
import {
    AddIngredients,
    ChooseSizeType,
    RemoveIngredients,
    ShowCalories,
    ShowPizzaImage,
    ShowPizzaTitle,
    useChosenPizza
} from 'features/Pizzas/ChosenPizza'
import { PizzaSize, PizzaType } from 'entities/PizzaCard'
import { CustomButton, Dialog } from 'shared/ui'
import { CrossIcon } from 'shared/assets'
import styles from './PizzaModal.module.scss'
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

    const pizzaPrice = chosenPizza?.details[pizzaType][pizzaSize].price

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
                    pizzaType={pizzaType}
                    chosenPizza={chosenPizza}
                />
                <div className={styles.pizzaInfo}>
                    <ShowCalories
                        pizzaSize={pizzaSize}
                        pizzaType={pizzaType}
                        chosenPizza={chosenPizza}
                    />
                    <ShowPizzaTitle
                        pizzaSize={pizzaSize}
                        pizzaType={pizzaType}
                        chosenPizza={chosenPizza}
                    />
                    <RemoveIngredients chosenPizza={chosenPizza} />
                    <ChooseSizeType
                        pizzaSize={pizzaSize}
                        pizzaType={pizzaType}
                        setSize={setPizzaSize}
                        setType={setPizzaType}
                    />
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
