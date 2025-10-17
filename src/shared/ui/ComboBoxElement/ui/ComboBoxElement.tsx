'use client'
import { Combobox, ComboboxInput } from '@headlessui/react'
import classNames from 'classnames'
import styles from './ComboBoxElement.module.scss'
import type { InputWrapperClassNameType } from '../lib/types/classNames'
import type { ChangeEvent, FC, ReactNode } from 'react'

interface ComboBoxElementPropsInterface {
    inputWrapperClassName?: InputWrapperClassNameType
    type: string
    inputValue: string
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    icon?: ReactNode
}

export const ComboBoxElement: FC<ComboBoxElementPropsInterface> = ({
    inputWrapperClassName,
    type,
    inputValue,
    onInputChange,
    placeholder,
    icon
}) => {
    const comboWrapperClassName = classNames(styles.comboWrapper, [
        styles[inputWrapperClassName as InputWrapperClassNameType]
    ])

    return (
        <Combobox as='div' className={comboWrapperClassName}>
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
