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
        removeAllPizzas,
        totalPrice
    } = useBasketPizza()

    const pizzas = pizzasInBasket?.map((pizza) => {
        const handleAddPizza = () => {
            addPizzaToBasket(pizza)
        }

        const handleRemovePizza = () => {
            removePizzaFromBasket(pizza)
        }

        const handleRemovePizzaCompletely = () => {
            removePizzaFromBasket(pizza, true)
        }

        const formattedPrice = priceFormat(pizza.totalPriceForCount as number)

        const ingredients = pizza.ingredients.join(', ')

        return (
            <BasketPizzaCard
                key={pizza.id}
                pizza={pizza}
                handleAddPizza={handleAddPizza}
                handleRemovePizza={handleRemovePizza}
                handleRemovePizzaCompletely={handleRemovePizzaCompletely}
                ingredients={ingredients}
                formattedPrice={formattedPrice}
            />
        )
    })

    const numberOfPizzasInBasket = pizzasInBasket?.reduce(
        (acc, item) => acc + item.count,
        0
    )

    const basketPizzasLength = productDeclension(
        numberOfPizzasInBasket as number
    )
    const basketFinalSum = priceFormat(totalPrice)

    const showBasketPizzasCondition = pizzas?.length ? (
        <BasketContent
            basketPizzasLength={basketPizzasLength}
            basketFinalSum={basketFinalSum}
            pizzas={pizzas}
            removeAllPizzas={removeAllPizzas}
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
            {showBasketPizzasCondition}
            <CustomButton className='close' onClick={onClickCloseButton}>
                <CrossIcon title='Закрыть' />
            </CustomButton>
        </Dialog>
    )
}
