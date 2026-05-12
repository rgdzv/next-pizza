import { Basket } from 'widgets/Basket'
// import { LoginDropDown } from 'features/Authorization'
import { SearchPizzas } from 'features/Pizzas/AllPizzas'
import { useBasketPizza } from 'features/Pizzas/BasketPizzas'
import { PizzaLogoIcon } from 'shared/assets'
import { CustomButton, CustomImage } from 'shared/ui'
import { useModal } from 'shared/lib'
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
    const numberOfPizzasForOrder = pizzasInBasket?.reduce(
        (acc, item) => acc + item.count,
        0
    )

    const buttonCondition =
        numberOfPizzasForOrder && numberOfPizzasForOrder > 0 ? (
            <>
                <i></i>
                <span>{numberOfPizzasForOrder}</span>
            </>
        ) : null

    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <CustomImage
                    src={PizzaLogoIcon}
                    className='logo'
                    alt='Логотип'
                    sizes='35px 35px'
                />
                <div className={styles.headerLogoBlock}>
                    <span className={styles.headerLogoBlockName}>
                        NEXT PIZZA
                    </span>
                    <span className={styles.headerLogoBlockSlogan}>
                        вкусней уже некуда
                    </span>
                </div>
            </div>
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
