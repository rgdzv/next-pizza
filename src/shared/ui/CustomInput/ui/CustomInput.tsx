import classNames from 'classnames'
import styles from './CustomInput.module.scss'
import type { InputWrapperClassNameType } from '../lib/types/classNames'
import type { FC, InputHTMLAttributes, ReactNode } from 'react'

interface CustomInputPropsInterface
    extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string
    value: string
    disabled?: boolean
    inputWrapperClassName?: InputWrapperClassNameType
    icon?: ReactNode
}

export const CustomInput: FC<CustomInputPropsInterface> = ({
    placeholder,
    value,
    inputWrapperClassName,
    disabled,
    icon,
    ...otherProps
}) => {
    const wrapperClassName = classNames(styles.inputWrapper, [
        styles[inputWrapperClassName as InputWrapperClassNameType]
    ])

    return (
        <div className={wrapperClassName}>
            {icon}
            <input
                className={styles.input}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                {...otherProps}
            />
        </div>
    )
}
