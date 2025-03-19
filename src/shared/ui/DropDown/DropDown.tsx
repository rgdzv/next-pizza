import { Menu } from '@headlessui/react'
import styles from './DropDown.module.scss'
import type { FC, ReactNode } from 'react'

interface DropDownPropsInterface {
    buttonComponent: ReactNode
}

export const DropDown: FC<DropDownPropsInterface> = ({ buttonComponent }) => {
    return (
        <Menu as='div' className={styles.dropDown}>
            {/* <MenuButton as={buttonComponent}>Войти</MenuButton> */}
            {buttonComponent}
        </Menu>
    )
}
