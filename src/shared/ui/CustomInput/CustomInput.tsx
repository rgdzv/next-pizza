import classNames from 'classnames'
import styles from './CustomInput.module.scss'
import type { InputWrapperClassNameType } from './lib/types/classNames'
import type { FC, InputHTMLAttributes, ReactNode, RefObject } from 'react'

interface CustomInputPropsInterface
    extends InputHTMLAttributes<HTMLInputElement> {
    ref?: RefObject<HTMLInputElement | null>
    placeholder?: string
    value: string
    disabled?: boolean
    inputWrapperClassName?: InputWrapperClassNameType
    icon?: ReactNode
}

export const CustomInput: FC<CustomInputPropsInterface> = ({
    ref,
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
