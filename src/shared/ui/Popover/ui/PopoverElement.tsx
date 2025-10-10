import { Fragment } from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import classNames from 'classnames'
import styles from './PopoverElement.module.scss'
import type { FC, ReactNode } from 'react'
import type { PopoverClassNameType } from '../lib/types/classNames'

interface PopoverElementPropsInterface {
    triggerButton: ReactNode
    options: ReactNode
    className?: PopoverClassNameType
}

export const PopoverElement: FC<PopoverElementPropsInterface> = ({
    triggerButton,
    options,
    className
}) => {
    const popoverClassName = classNames(
        styles.popover,
        styles[className as PopoverClassNameType]
    )

    return (
        <Popover as='div' className={popoverClassName}>
            <PopoverButton as={Fragment}>{triggerButton}</PopoverButton>
            <PopoverPanel as='ul'>{options}</PopoverPanel>
        </Popover>
    )
}
