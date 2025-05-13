import { Dialog } from 'shared/ui'
// import { BasketEmpty } from '../BasketEmpty/BasketEmpty'
import { priceFormat } from 'shared/helpers'
import { productTax } from '../../lib/productTax'
import { BasketContent } from '../BasketContent/BasketContent'
import { productDeclension } from '../../lib/productDeclension'
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
    const basketProductNumber = productDeclension(11)
    const basketFinalSum = priceFormat(2142)
    const basketFinalSumTax = priceFormat(productTax(2142))

    return (
        <Dialog
            dialogRef={dialogRef}
            closeModal={closeModal}
            className='sidebar'
        >
            {/* <BasketEmpty closeModal={onClickCloseButton} /> */}
            <BasketContent
                productQuantity={basketProductNumber}
                basketFinalSum={basketFinalSum}
                basketFinalSumTax={basketFinalSumTax}
            />
        </Dialog>
    )
}
