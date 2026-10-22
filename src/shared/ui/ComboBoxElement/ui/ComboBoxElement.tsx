'use client'
import { Combobox, ComboboxInput } from '@headlessui/react'
import classNames from 'classnames'
import styles from './ComboBoxElement.module.scss'
import type { InputWrapperVariantType } from '../lib/types/variants'
import type { ChangeEvent, FC, ReactNode } from 'react'

interface ComboBoxElementPropsInterface {
    variant?: InputWrapperVariantType
    type: string
    inputValue: string
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    icon?: ReactNode
}

export const ComboBoxElement: FC<ComboBoxElementPropsInterface> = ({
    variant,
    type,
    inputValue,
    onInputChange,
    placeholder,
    icon
}) => {
    const comboWrapperClassName = classNames(styles.comboWrapper, [
        variant && styles[variant]
    ])

    return (
        <Combobox
            as='div'
            className={comboWrapperClassName}
            data-testid='combobox-wrapper'
        >
            {icon}
            <ComboboxInput
                value={inputValue}
                onChange={onInputChange}
                placeholder={placeholder}
                type={type}
            />
        </Combobox>
    )
}
