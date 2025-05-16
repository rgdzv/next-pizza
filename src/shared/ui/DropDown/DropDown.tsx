import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import { CustomButton } from '../CustomButton/CustomButton'
import styles from './DropDown.module.scss'
import type { FC, ReactNode } from 'react'

interface DropDownPropsInterface {
    triggerContent: ReactNode
    options: ReactNode
}

export const DropDown: FC<DropDownPropsInterface> = ({
    triggerContent,
    options
}) => {
    return (
        <Menu as='div' className={styles.dropDown}>
            <MenuButton as={CustomButton} className='primary'>
                {triggerContent}
            </MenuButton>
            <MenuItems className={styles.options}>{options}</MenuItems>
        </Menu>
    )
}
