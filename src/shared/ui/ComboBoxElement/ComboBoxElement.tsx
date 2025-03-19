'use client'
import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions
} from '@headlessui/react'
import classNames from 'classnames'
import { PizzaLogoIcon } from 'shared/assets'
import { CustomImage } from '../CustomImage/CustomImage'
import styles from './ComboBoxElement.module.scss'
import type { PizzaInterface } from 'features/SearchPizzaInput/ui/SearchPizzaInput'
import type { ChangeEvent, FC, KeyboardEvent, ReactNode } from 'react'

type ClassNameInputWrapperType = 'searchPizza'

interface ComboBoxElementPropsInterface {
    classNameForInputWrapper?: ClassNameInputWrapperType
    type: string
    inputValue: string
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    iconOne: ReactNode
    filteredPizzas: PizzaInterface[]
    fetchPizzaOnEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

export const ComboBoxElement: FC<ComboBoxElementPropsInterface> = ({
    classNameForInputWrapper,
    type,
    inputValue,
    onInputChange,
    placeholder,
    iconOne,
    filteredPizzas,
    fetchPizzaOnEnter
}) => {
    const comboWrapperClassName = classNames(styles.comboWrapper, [
        styles[classNameForInputWrapper as ClassNameInputWrapperType]
    ])

    return (
        <div className={styles.comboOverlay}>
            <Combobox as='div' className={comboWrapperClassName}>
                {iconOne}
                <ComboboxInput
                    value={inputValue}
                    onChange={onInputChange}
                    placeholder={placeholder}
                    onKeyDown={fetchPizzaOnEnter}
                    type={type}
                />
                <ComboboxOptions as='ul' className={styles.comboOptions}>
                    {filteredPizzas.map((pizza) => (
                        <ComboboxOption as='li' key={pizza.id} value={pizza}>
                            <CustomImage
                                src={PizzaLogoIcon}
                                alt={pizza.name}
                                className='mini'
                            />
                            <span>{pizza.name}</span>
                            <span>155 руб.</span>
                        </ComboboxOption>
                    ))}
                </ComboboxOptions>
            </Combobox>
        </div>
    )
}
