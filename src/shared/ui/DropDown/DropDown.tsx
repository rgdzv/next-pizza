import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CustomButton } from '../CustomButton/ui/CustomButton'
import { CustomLink } from '../CustomLink/CustomLink'
import styles from './DropDown.module.scss'
import type { FC, ReactNode } from 'react'
import type { ClassNameType } from '../CustomButton/model/types/types'

interface DropDownPropsInterface {
    triggerContent: ReactNode
    buttonClassName: ClassNameType
}

const links = [
    { href: '/settings', label: 'Настройки' },
    { href: '/support', label: 'Заказы' },
    { href: '/license', label: 'Выйти' }
]

export const DropDown: FC<DropDownPropsInterface> = ({
    triggerContent,
    buttonClassName
}) => {
    return (
        <Menu as='div' className={styles.dropDown}>
            <MenuButton as={CustomButton} className={buttonClassName}>
                {triggerContent}
            </MenuButton>
            <MenuItems className={styles.options}>
                {links.map((link) => (
                    <MenuItem key={link.href} as={Fragment}>
                        <CustomLink href={link.href} className='option'>
                            {link.label}
                        </CustomLink>
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    )
}
