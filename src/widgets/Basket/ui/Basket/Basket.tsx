import { Dialog } from 'shared/ui'
import { BasketEmpty } from '../BasketEmpty/BasketEmpty'
import type { FC, MouseEvent, RefObject } from 'react'

interface BasketPropsInterface {
    dialogRef: RefObject<HTMLDialogElement | null>
    onClickOutside: (e: MouseEvent<HTMLDialogElement>) => void
    onClickCloseButton: () => void
    closeModal: () => void
}

export const Basket: FC<BasketPropsInterface> = ({
    dialogRef,
    closeModal,
    onClickOutside,
    onClickCloseButton
}) => {
    return (
        <Dialog
            dialogRef={dialogRef}
            closeModal={closeModal}
            onClickOutside={onClickOutside}
            className='sidebar'
        >
            <BasketEmpty closeModal={onClickCloseButton} />
        </Dialog>
    )
}
