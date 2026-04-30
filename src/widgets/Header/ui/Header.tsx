import { Basket } from 'widgets/Basket'
// import { LoginDropDown } from 'features/Authorization'
import { SearchPizzas } from 'features/Pizzas/AllPizzas'
import { useBasketPizza } from 'features/Pizzas/BasketPizzas'
import { PizzaLogoIcon } from 'shared/assets'
import { CustomButton } from 'shared/ui'
import { useModal } from 'shared/lib'
import { Logo } from '../../Logo'
import styles from './Header.module.scss'
import type { FC } from 'react'

export const Header: FC = () => {
    const {
        openModal,
        closeModal,
        dialogRef,
        onClickCloseButton,
        onClickOutside
    } = useModal()

    const { pizzasInBasket } = useBasketPizza()

    const buttonCondition = pizzasInBasket?.length ? (
        <>
            <i></i>
            <span>{pizzasInBasket.length}</span>
        </>
    ) : null

    return (
        <header className={styles.header}>
            <Logo
                name='NEXT PIZZA'
                slogan='вкусней уже некуда'
                imgSrc={PizzaLogoIcon}
            />
            <SearchPizzas />
            <div className={styles.headerRight}>
                {/* <LoginDropDown /> */}
                <CustomButton className='basket' onClick={openModal}>
                    Корзина
                    {buttonCondition}
                </CustomButton>
            </div>
            <Basket
                dialogRef={dialogRef}
                closeModal={closeModal}
                onClickCloseButton={onClickCloseButton}
                onClickOutside={onClickOutside}
            />
        </header>
    )
}
