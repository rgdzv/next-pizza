import classNames from 'classnames'
import styles from './CustomInput.module.scss'
import type { FC, InputHTMLAttributes, ReactNode, RefObject } from 'react'

type ClassNameInputWrapperType = 'searchPizza'

interface CustomInputPropsInterface
    extends InputHTMLAttributes<HTMLInputElement> {
    ref?: RefObject<HTMLInputElement | null>
    placeholder?: string
    value: string
    disabled?: boolean
    classNameForInputWrapper?: ClassNameInputWrapperType
    icon?: ReactNode
}

export const CustomInput: FC<CustomInputPropsInterface> = ({
    ref,
    placeholder,
    value,
    classNameForInputWrapper,
    disabled,
    icon,
    ...otherProps
}) => {
    const inputWrapperClassName = classNames(styles.inputWrapper, [
        styles[classNameForInputWrapper as ClassNameInputWrapperType]
    ])

    return (
        <div className={inputWrapperClassName}>
            {icon}
            <input
                ref={ref}
                className={styles.input}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                {...otherProps}
            />
        </div>
    )
}
