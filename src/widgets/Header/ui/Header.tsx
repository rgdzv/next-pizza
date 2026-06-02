// import { LoginDropDown } from 'features/Authorization'
import { SearchPizzas } from 'features/Pizzas/AllPizzas'
import { useBasketPizza } from 'features/Pizzas/BasketPizzas'
import { PizzaLogoIcon } from 'shared/assets'
import { CustomButton, CustomImage } from 'shared/ui'
import styles from './Header.module.scss'
import type { FC } from 'react'

interface HeaderPropsInterface {
    openDialog: () => void
}

export const Header: FC<HeaderPropsInterface> = ({ openDialog }) => {
    const { totalCount } = useBasketPizza()

    const buttonCondition = totalCount ? (
        <>
            <i></i>
            <span>{totalCount}</span>
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
                <CustomButton className='basket' onClick={openDialog}>
                    Корзина
                    {buttonCondition}
                </CustomButton>
            </div>
        </header>
    )
}
