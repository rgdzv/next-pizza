import { useBasketPizza } from 'features/Pizzas/BasketPizzas'
import { BasketPizzaCard } from 'entities/BasketPizzaCard'
import { priceFormat } from 'shared/lib'
import { CustomButton, Dialog } from 'shared/ui'
import { CrossIcon } from 'shared/assets'
import { BasketEmpty } from '../BasketEmpty/BasketEmpty'
import { BasketContent } from '../BasketContent/BasketContent'
import { productDeclension } from '../../lib/helpers/productDeclension'
import type { FC, MouseEvent, RefObject } from 'react'

interface BasketPropsInterface {
    dialogRef: RefObject<HTMLDialogElement | null>
    closeModal: () => void
    onClickCloseButton: () => void
    onClickOutside: (e: MouseEvent<HTMLDialogElement>) => void
}

export const Basket: FC<BasketPropsInterface> = ({
    dialogRef,
    closeModal,
    onClickCloseButton,
    onClickOutside
}) => {
    const {
        pizzasInBasket,
        addPizzaToBasket,
        removePizzaFromBasket,
        totalPrice
    } = useBasketPizza()

    const pizzas = pizzasInBasket?.map((pizza) => {
        return (
            <BasketPizzaCard
                key={pizza.id}
                pizza={pizza}
                addPizzaToBasket={addPizzaToBasket}
                removePizzaFromBasket={removePizzaFromBasket}
            />
        )
    })

    const basketPizzasLength = productDeclension(Number(pizzasInBasket?.length))
    const basketFinalSum = priceFormat(totalPrice)

    const showBasketPizzasCondition =
        pizzas && pizzas.length !== 0 ? (
            <BasketContent
                basketPizzasLength={basketPizzasLength}
                basketFinalSum={basketFinalSum}
                pizzas={pizzas}
            />
        ) : (
            <BasketEmpty />
        )

    return (
        <Dialog
            dialogRef={dialogRef}
            onClose={closeModal}
            onClick={onClickOutside}
            className='sidebar'
        >
            <>
                {showBasketPizzasCondition}
                <CustomButton className='close' onClick={onClickCloseButton}>
                    <CrossIcon title='Закрыть' />
                </CustomButton>
            </>
        </Dialog>
    )
}
