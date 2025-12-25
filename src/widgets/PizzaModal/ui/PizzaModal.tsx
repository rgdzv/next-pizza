import {
    ChooseSizeType,
    ShowCalories
} from 'features/Pizzas/ChosenPizzaInteract'
import { CustomButton, Dialog } from 'shared/ui'
import { useModal } from 'shared/lib'
import { CrossIcon } from 'shared/assets'
import styles from './PizzaChoose.module.scss'
import type { FC } from 'react'

// interface PizzaModalPropsInterface {}

export const PizzaModal: FC = () => {
    const {
        isModalOpen,
        // openModal,
        closeModal,
        dialogRef,
        onClickCloseButton,
        onClickOutside
    } = useModal()

    return (
        isModalOpen && (
            <Dialog
                dialogRef={dialogRef}
                onClose={closeModal}
                onClick={onClickOutside}
                className='pizzaModal'
            >
                <div className={styles.pizzaModal}>
                    <div></div>
                    <div>
                        <ShowCalories
                            calories='335'
                            prot='11.2'
                            fat='11.2'
                            carbo='11.2'
                            weight='600'
                        />
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
    )
}
