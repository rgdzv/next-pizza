import classNames from 'classnames'
import styles from './CustomButton.module.scss'
import type { ButtonClassNameType } from './lib/types/classNames'
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface ButtonPropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: ButtonClassNameType
    disabled?: boolean
    active?: boolean
}

export const CustomButton: FC<ButtonPropsInterface> = ({
    children,
    className,
    disabled,
    active,
    ...otherProps
}) => {
    const buttonClassName = classNames(
        styles.button,
        {
            [styles.active]: active
        },
        styles[className as ButtonClassNameType]
    )

    return (
        <button className={buttonClassName} disabled={disabled} {...otherProps}>
            {children}
        </button>
    )
}
