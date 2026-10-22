import { memo } from 'react'
import classNames from 'classnames'
import styles from './CustomButton.module.scss'
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import type { ButtonVariantType } from '../lib/types/variants'

interface ButtonPropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: ButtonVariantType
    'data-active'?: boolean
}

export const CustomButton: FC<ButtonPropsInterface> = memo(
    ({ children, variant, type = 'button', ...otherProps }) => {
        const buttonClassName = classNames(
            styles.button,
            variant && styles[variant]
        )

        return (
            <button type={type} className={buttonClassName} {...otherProps}>
                {children}
            </button>
        )
    }
)
