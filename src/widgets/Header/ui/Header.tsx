import { SearchPizzaInput } from 'features/SearchPizzaInput'
import { LoginDropDown } from 'features/Authorization'
import { PizzaLogoIcon, ShoppingCartIcon } from 'shared/assets'
import { CustomButton } from 'shared/ui'
import { Basket } from 'widgets/Basket'
import { useState, type FC } from 'react'
import { Logo } from '../../Logo'
import styles from './Header.module.scss'

export const Header: FC = () => {
    const [opened, setOpened] = useState(false)

    const handleOpened = () => {
        setOpened(!opened)
    }

    return (
        <header className={styles.header}>
            <Logo
                name='NEXT PIZZA'
                slogan='вкусней уже некуда'
                imgSrc={PizzaLogoIcon}
            />
            <SearchPizzaInput />
            <div className={styles.headerRight}>
                <LoginDropDown />
                <CustomButton className='primary' onClick={handleOpened}>
                    <ShoppingCartIcon title='Корзина' />
                </CustomButton>
            </div>
            <Basket opened={opened} handleOpened={handleOpened} />
        </header>
    )
}
