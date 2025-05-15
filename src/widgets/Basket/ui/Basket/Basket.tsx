import { Dialog } from 'shared/ui'
// import { BasketEmpty } from '../BasketEmpty/BasketEmpty'
import { priceFormat } from 'shared/lib'
import { BasketPizzaCard } from 'entities/BasketPizzaCard'
import { productTax } from '../../lib/helpers/productTax'
import { BasketContent } from '../BasketContent/BasketContent'
import { productDeclension } from '../../lib/helpers/productDeclension'
import type { BasketPizza } from 'entities/BasketPizzaCard/lib/types/basketPizza' // <===========
import type { FC, RefObject } from 'react'

interface BasketPropsInterface {
    dialogRef: RefObject<HTMLDialogElement | null>
    onClickCloseButton: () => void
    closeModal: () => void
}

const BASKET_PIZZAS: BasketPizza[] = [
    {
        id: '1',
        title: 'Пепперони-фреш',
        description: '30 см, традиционное тесто, 300 г',
        imgSrc: '',
        price: '500'
    },
    {
        id: '2',
        title: 'Пепперони-фреш',
        description: '30 см, традиционное тесто, 300 г',
        imgSrc: '',
        price: '500'
    },
    {
        id: '3',
        title: 'Пепперони-фреш',
        description: '30 см, традиционное тесто, 300 г',
        imgSrc: '',
        price: '500'
    }
]

export const Basket: FC<BasketPropsInterface> = ({
    dialogRef,
    closeModal
    // onClickCloseButton
}) => {
    const basketProductNumber = productDeclension(11)
    const basketFinalSum = priceFormat(2142)
    const basketFinalSumTax = priceFormat(productTax(2142))

    const pizzas = BASKET_PIZZAS.map((pizza) => (
        <BasketPizzaCard pizza={pizza} key={pizza.id} />
    ))

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
                pizzas={pizzas}
            />
        </Dialog>
    )
}
