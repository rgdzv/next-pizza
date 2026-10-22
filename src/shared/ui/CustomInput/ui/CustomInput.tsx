import classNames from 'classnames'
import styles from './CustomInput.module.scss'
import type { InputVariantType } from '../lib/types/variants'
import type { FC, InputHTMLAttributes, ReactNode } from 'react'

interface CustomInputPropsInterface
    extends InputHTMLAttributes<HTMLInputElement> {
    value: string
    variant?: InputVariantType
    icon?: ReactNode
}

export const CustomInput: FC<CustomInputPropsInterface> = ({
    value,
    variant,
    icon,
    ...otherProps
}) => {
    const wrapperClassName = classNames(
        styles.inputWrapper,
        variant && styles[variant]
    )

    return (
        <div className={wrapperClassName} data-testid='input-wrapper'>
            {icon}
            <input className={styles.input} value={value} {...otherProps} />
        </div>
    )
}
