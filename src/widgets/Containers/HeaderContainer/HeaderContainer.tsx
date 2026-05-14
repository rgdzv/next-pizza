import { useModal } from 'shared/lib'
import { Header } from '../../Header'
import { Basket } from '../../Basket'
import type { FC } from 'react'

export const HeaderContainer: FC = () => {
    const {
        openModal,
        closeModal,
        dialogRef,
        onClickCloseButton,
        onClickOutside
    } = useModal()
    return (
        <>
            <Header openModal={openModal} />
            <Basket
                dialogRef={dialogRef}
                closeModal={closeModal}
                onClickCloseButton={onClickCloseButton}
                onClickOutside={onClickOutside}
            />
        </>
    )
}
