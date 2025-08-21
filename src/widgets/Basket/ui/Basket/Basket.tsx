import { BasketPizzaCard } from 'entities/BasketPizzaCard'
import { priceFormat } from 'shared/lib'
import { CustomButton, Dialog } from 'shared/ui'
import { CrossIcon } from 'shared/assets'
import { BasketEmpty } from '../BasketEmpty/BasketEmpty'
import { BasketContent } from '../BasketContent/BasketContent'
import { productTax } from '../../lib/helpers/productTax'
import { productDeclension } from '../../lib/helpers/productDeclension'
import type { FC, MouseEvent, RefObject } from 'react'

const BASKET_PIZZAS = [
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
interface BasketPropsInterface {
    dialogRef: RefObject<HTMLDialogElement | null>
    onClickCloseButton: () => void
    closeModal: () => void
    onClickOutside: (e: MouseEvent<HTMLDialogElement>) => void
}

export const Basket: FC<BasketPropsInterface> = ({
    dialogRef,
    closeModal,
    onClickCloseButton,
    onClickOutside
}) => {
    const basketProductNumber = productDeclension(11)
    const basketFinalSum = priceFormat(2142)
    const basketFinalSumTax = priceFormat(productTax(2142))

    const pizzas = BASKET_PIZZAS.map((pizza) => {
        const pizzaWithFormattedPrice = {
            ...pizza,
            price: priceFormat(Number(pizza.price))
        }

        return (
            <BasketPizzaCard pizza={pizzaWithFormattedPrice} key={pizza.id} />
        )
    })

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    const showBasketPizzasCondition = pizzas ? (
        <BasketContent
            productQuantity={basketProductNumber}
            basketFinalSum={basketFinalSum}
            basketFinalSumTax={basketFinalSumTax}
            pizzas={pizzas}
        />
    ) : (
        <BasketEmpty />
    )
    console.log(showBasketPizzasCondition)

    return (
        <Dialog
            dialogRef={dialogRef}
            onClose={closeModal}
            onClick={onClickOutside}
            className='sidebar'
        >
            <>
                {/* {showBasketPizzasCondition} */}
                <CustomButton className='close' onClick={onClickCloseButton}>
                    <CrossIcon title='Закрыть' />
                </CustomButton>
            </>
        </Dialog>
    )
}
