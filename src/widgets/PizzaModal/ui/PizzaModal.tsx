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
    dialogRef: RefObject<HTMLDialogElement | null>
    closeDialog: () => void
    onClickOutside: (e: MouseEvent<HTMLDialogElement>) => void
    onClickCloseButton: () => void
}

export const PizzaModal: FC<PizzaModalPropsInterface> = ({
    dialogRef,
    closeDialog,
    onClickCloseButton,
    onClickOutside
}) => {
    return (
        <Dialog
            dialogRef={dialogRef}
            onClose={closeDialog}
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
                        <AddToBasket closeDialog={closeDialog} />
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
