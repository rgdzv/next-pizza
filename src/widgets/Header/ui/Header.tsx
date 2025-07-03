import { Basket } from 'widgets/Basket'
import { LoginDropDown } from 'features/Authorization'
import { SearchPizzas } from 'features/Pizzas/SearchPizzas'
import { PizzaLogoIcon, ShoppingCartIcon } from 'shared/assets'
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

    return (
        <header className={styles.header}>
            <Logo
                name='NEXT PIZZA'
                slogan='вкусней уже некуда'
                imgSrc={PizzaLogoIcon}
            />
            <SearchPizzas />
            <div className={styles.headerRight}>
                <LoginDropDown />
                <CustomButton className='primary' onClick={openModal}>
                    <ShoppingCartIcon title='Корзина' />
                </CustomButton>
            </div>
            <Basket
                closeModal={closeModal}
                dialogRef={dialogRef}
                onClickCloseButton={onClickCloseButton}
                onClickOutside={onClickOutside}
            />
        </header>
    )
}
