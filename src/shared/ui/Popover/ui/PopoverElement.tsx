import { Fragment } from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import classNames from 'classnames'
import styles from './PopoverElement.module.scss'
import type { FC, ReactNode } from 'react'
import type { PopoverVariantType } from '../lib/types/variants'

interface PopoverElementPropsInterface {
    triggerButton: ReactNode
    options: ReactNode
    variant?: PopoverVariantType
}

export const PopoverElement: FC<PopoverElementPropsInterface> = ({
    triggerButton,
    options,
    variant
}) => {
    const popoverClassName = classNames(
        styles.popover,
        variant && styles[variant]
    )

    return (
        <Popover as='div' className={popoverClassName} data-testid='popover'>
            <PopoverButton as={Fragment}>{triggerButton}</PopoverButton>
            <PopoverPanel as='ul'>{options}</PopoverPanel>
        </Popover>
    )
}
