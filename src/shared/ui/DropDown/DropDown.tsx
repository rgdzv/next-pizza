import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import styles from './DropDown.module.scss'
import type { ElementType, FC, ReactNode } from 'react'

interface DropDownPropsInterface {
    component: ElementType
    triggerContent: ReactNode
    options: ReactNode
    buttonClassName: string
}

export const DropDown: FC<DropDownPropsInterface> = ({
    component,
    triggerContent,
    options,
    buttonClassName
}) => {
    return (
        <Menu as='div' className={styles.dropDown}>
            <MenuButton as={component} className={buttonClassName}>
                {triggerContent}
            </MenuButton>
            <MenuItems as='ul'>{options}</MenuItems>
        </Menu>
    )
}
