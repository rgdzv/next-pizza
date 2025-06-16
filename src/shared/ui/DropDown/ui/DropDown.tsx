import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import classNames from 'classnames'
import styles from './DropDown.module.scss'
import type { DropDownClassNameType } from '../lib/types/classNames'
import type { ElementType, FC, ReactNode } from 'react'

interface DropDownPropsInterface {
    component: ElementType
    triggerContent: ReactNode
    options: ReactNode
    buttonClassName: string
    className?: DropDownClassNameType
}

export const DropDown: FC<DropDownPropsInterface> = ({
    component,
    triggerContent,
    options,
    buttonClassName,
    className
}) => {
    const dropdownClassName = classNames(
        styles.dropdown,
        styles[className as DropDownClassNameType]
    )

    return (
        <Menu as='div' className={dropdownClassName}>
            <MenuButton as={component} className={buttonClassName}>
                {triggerContent}
            </MenuButton>
            <MenuItems as='ul'>{options}</MenuItems>
        </Menu>
    )
}
