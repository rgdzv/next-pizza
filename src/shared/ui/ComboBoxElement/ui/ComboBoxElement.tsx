'use client'
import { Combobox, ComboboxInput, ComboboxOptions } from '@headlessui/react'
import classNames from 'classnames'
import styles from './ComboBoxElement.module.scss'
import type { InputWrapperClassNameType } from '../lib/types/classNames'
import type { ChangeEvent, FC, KeyboardEvent, ReactNode } from 'react'

interface ComboBoxElementPropsInterface {
    inputWrapperClassName?: InputWrapperClassNameType
    type: string
    inputValue: string
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    iconOne?: ReactNode
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
    options: ReactNode
}

export const ComboBoxElement: FC<ComboBoxElementPropsInterface> = ({
    inputWrapperClassName,
    type,
    inputValue,
    onInputChange,
    placeholder,
    iconOne,
    onKeyDown,
    options
}) => {
    const comboWrapperClassName = classNames(styles.comboWrapper, [
        styles[inputWrapperClassName as InputWrapperClassNameType]
    ])

    return (
        <Combobox as='div' className={comboWrapperClassName}>
            {iconOne}
            <ComboboxInput
                value={inputValue}
                onChange={onInputChange}
                placeholder={placeholder}
                onKeyDown={onKeyDown}
                type={type}
            />
            <ComboboxOptions as='ul' className={styles.comboOptions}>
                {options}
            </ComboboxOptions>
        </Combobox>
    )
}
