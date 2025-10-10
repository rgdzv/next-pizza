import { Fragment } from 'react'
import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import classNames from 'classnames'
import styles from './DropDown.module.scss'
import type { DropDownClassNameType } from '../lib/types/classNames'
import type { FC, ReactNode } from 'react'

interface DropDownPropsInterface {
    triggerButton: ReactNode
    options: ReactNode
    className?: DropDownClassNameType
}

export const DropDown: FC<DropDownPropsInterface> = ({
    triggerButton,
    options,
    className
}) => {
    const dropdownClassName = classNames(
        styles.dropdown,
        styles[className as DropDownClassNameType]
    )

    return (
        <Menu as='div' className={dropdownClassName}>
            <MenuButton as={Fragment}>{triggerButton}</MenuButton>
            <MenuItems as='ul'>{options}</MenuItems>
        </Menu>
    )
}
