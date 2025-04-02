import { Menu } from '@headlessui/react'
import styles from './DropDown.module.scss'
import type { FC, ReactElement } from 'react'

interface DropDownPropsInterface {
    trigger: ReactElement
}

export const DropDown: FC<DropDownPropsInterface> = ({ trigger }) => {
    return (
        <Menu as='div' className={styles.dropDown}>
            {trigger}
            {/* <MenuButton as={trigger} /> */}
        </Menu>
    )
}
