import {
    AddIngredients,
    AddToBasket,
    ChooseSizeType,
    RemoveIngredients,
    ShowPizzaImage,
    ShowPizzaTitle
} from 'features/Pizzas/ChosenPizza'
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
    if (!isModalOpen) return null

    return (
        <Dialog
            dialogRef={dialogRef}
            onClose={closeModal}
            onClick={onClickOutside}
            className='pizzaModal'
        >
            <div className={styles.pizzaModal}>
                <ShowPizzaImage />
                <div className={styles.pizzaInfoWrapper}>
                    <div className={styles.pizzaInfo}>
                        <ShowPizzaTitle />
                        <RemoveIngredients />
                        <ChooseSizeType />
                        <AddIngredients />
                        <AddToBasket />
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
