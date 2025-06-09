import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import styles from './PopoverElement.module.scss'
import type { ElementType, FC, ReactNode } from 'react'

interface PopoverElementPropsInterface {
    component: ElementType
    triggerContent: ReactNode
    options: ReactNode
    buttonClassName: string
}

export const PopoverElement: FC<PopoverElementPropsInterface> = ({
    component,
    triggerContent,
    options,
    buttonClassName
}) => {
    return (
        <Popover as='div' className={styles.popover}>
            <PopoverButton as={component} className={buttonClassName}>
                {triggerContent}
            </PopoverButton>
            <PopoverPanel as='ul'>{options}</PopoverPanel>
        </Popover>
    )
}
