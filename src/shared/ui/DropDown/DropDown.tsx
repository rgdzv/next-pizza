import { Menu, MenuButton } from '@headlessui/react'
import { CustomButton } from '../CustomButton/CustomButton'
import styles from './DropDown.module.scss'
import type { FC, ReactNode } from 'react'

interface DropDownPropsInterface {
    triggerContent: ReactNode
    buttonClassName: 'primary'
}

export const DropDown: FC<DropDownPropsInterface> = ({
    triggerContent,
    buttonClassName
}) => {
    return (
        <Menu as='div' className={styles.dropDown}>
            <MenuButton as={CustomButton} className={buttonClassName}>
                {triggerContent}
            </MenuButton>
        </Menu>
    )
}
