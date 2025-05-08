import { Dialog } from 'shared/ui'
// import { BasketEmpty } from '../BasketEmpty/BasketEmpty'
import { BasketContent } from '../BasketContent/BasketContent'
import type { FC, RefObject } from 'react'

interface BasketPropsInterface {
    dialogRef: RefObject<HTMLDialogElement | null>
    onClickCloseButton: () => void
    closeModal: () => void
}

export const Basket: FC<BasketPropsInterface> = ({
    dialogRef,
    closeModal
    // onClickCloseButton
}) => {
    return (
        <Dialog
            dialogRef={dialogRef}
            closeModal={closeModal}
            className='sidebar'
        >
            {/* <BasketEmpty closeModal={onClickCloseButton} /> */}
            <BasketContent
                productQuantity='3'
                basketFinalSum='2142'
                basketFinalSumTax='112'
            />
        </Dialog>
    )
}
