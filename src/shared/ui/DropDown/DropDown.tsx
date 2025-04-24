import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CustomButton } from '../CustomButton/CustomButton'
import { CustomLink } from '../CustomLink/CustomLink'
import styles from './DropDown.module.scss'
import type { FC, ReactNode } from 'react'

interface DropdownOptions {
    id: string
    content: string
    href: string
    onClick?: () => void
}

interface DropDownPropsInterface {
    triggerContent: ReactNode
    buttonClassName: 'primary' // fix
    options: DropdownOptions[]
}

export const DropDown: FC<DropDownPropsInterface> = ({
    triggerContent,
    buttonClassName,
    options
}) => {
    return (
        <Menu as='div' className={styles.dropDown}>
            <MenuButton as={CustomButton} className={buttonClassName}>
                {triggerContent}
            </MenuButton>
            <MenuItems className={styles.options}>
                {options.map((option) => (
                    <MenuItem key={option.id} as={Fragment}>
                        <CustomLink
                            href={option.href}
                            className='option'
                            onClick={option.onClick}
                        >
                            {option.content}
                        </CustomLink>
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    )
}
