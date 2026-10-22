import { Fragment } from 'react'
import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import classNames from 'classnames'
import styles from './DropDown.module.scss'
import type { DropDownVariantType } from '../lib/types/variants'
import type { FC, ReactNode } from 'react'

interface DropDownPropsInterface {
    triggerButton: ReactNode
    options: ReactNode
    variant?: DropDownVariantType
}

export const DropDown: FC<DropDownPropsInterface> = ({
    triggerButton,
    options,
    variant
}) => {
    const dropdownClassName = classNames(
        styles.dropdown,
        variant && styles[variant]
    )

    return (
        <Menu as='div' className={dropdownClassName} data-testid='dropdown'>
            <MenuButton as={Fragment}>{triggerButton}</MenuButton>
            <MenuItems as='ul'>{options}</MenuItems>
        </Menu>
    )
}
