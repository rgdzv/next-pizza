import classNames from 'classnames'
import styles from './CustomButton.module.scss'
import type { ButtonClassNameType } from '../lib/types/classNames'
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface ButtonPropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: ButtonClassNameType
    disabled?: boolean
    categoryActive?: boolean
    sortOptionActive?: boolean
}

export const CustomButton: FC<ButtonPropsInterface> = ({
    children,
    className,
    disabled,
    categoryActive,
    sortOptionActive,
    ...otherProps
}) => {
    const buttonClassName = classNames(
        styles.button,
        styles[className as ButtonClassNameType],
        {
            [styles.categoryActive]: categoryActive,
            [styles.sortOptionActive]: sortOptionActive
        }
    )

    return (
        <button className={buttonClassName} disabled={disabled} {...otherProps}>
            {children}
        </button>
    )
}
