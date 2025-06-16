import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import classNames from 'classnames'
import styles from './PopoverElement.module.scss'
import type { PopoverClassNameType } from '../lib/types/classNames'
import type { ElementType, FC, ReactNode } from 'react'

interface PopoverElementPropsInterface {
    component: ElementType
    triggerContent: ReactNode
    options: ReactNode
    buttonClassName: string
    className?: PopoverClassNameType
}

export const PopoverElement: FC<PopoverElementPropsInterface> = ({
    component,
    triggerContent,
    options,
    buttonClassName,
    className
}) => {
    const popoverClassName = classNames(
        styles.popover,
        styles[className as PopoverClassNameType]
    )

    return (
        <Popover as='div' className={popoverClassName}>
            <PopoverButton as={component} className={buttonClassName}>
                {triggerContent}
            </PopoverButton>
            <PopoverPanel as='ul'>{options}</PopoverPanel>
        </Popover>
    )
}
