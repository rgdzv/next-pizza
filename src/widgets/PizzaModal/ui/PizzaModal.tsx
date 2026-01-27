import {
    ChooseSizeType,
    ShowCalories
} from 'features/Pizzas/ChosenPizzaInteract'
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
                    <div className={styles.pizzaIngredients}>
                        Свиная шейка, красный лук, маринованные огурчики,
                        моцарелла, соус сливочный хрен, фирменный соус альфредо
                    </div>
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
