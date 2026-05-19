import { useModal } from 'shared/lib'
import { PizzaModal } from '../../PizzaModal'
import { Pizzas } from '../../Pizzas'
import type { FC } from 'react'

export const PizzasContainer: FC = () => {
    const {
        isModalOpen,
        openModal,
        closeModal,
        dialogRef,
        onClickCloseButton,
        onClickOutside
    } = useModal()
    return (
        <>
            <Pizzas openModal={openModal} />
            {isModalOpen && (
                <PizzaModal
                    closeModal={closeModal}
                    dialogRef={dialogRef}
                    onClickCloseButton={onClickCloseButton}
                    onClickOutside={onClickOutside}
                />
            )}
        </>
    )
}
