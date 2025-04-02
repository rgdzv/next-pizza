import { SearchPizzaInput } from 'features/SearchPizzaInput'
import { LoginDropDown } from 'features/Authorization'
import { PizzaLogoIcon } from 'shared/assets'
import { Logo } from '../../Logo'
import styles from './Header.module.scss'
import type { FC } from 'react'

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Logo
                name='NEXT PIZZA'
                slogan='вкусней уже некуда'
                imgSrc={PizzaLogoIcon}
            />
            <SearchPizzaInput />
            <div className={styles.headerButtons}>
                <LoginDropDown />
            </div>
        </header>
    )
}
