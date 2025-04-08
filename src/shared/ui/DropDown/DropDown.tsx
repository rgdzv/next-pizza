import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CustomButton } from '../CustomButton/ui/CustomButton'
import { CustomLink } from '../CustomLink/CustomLink'
import styles from './DropDown.module.scss'
import type { FC, ReactNode } from 'react'
import type { ClassNameType } from '../CustomButton/model/types/types'

interface DropdownOptions {
    id: string
    content: string
    href: string
    onClick?: () => void
}

interface DropDownPropsInterface {
    triggerContent: ReactNode
    buttonClassName: ClassNameType
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
