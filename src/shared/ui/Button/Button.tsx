import classNames from 'classnames'
import styles from './Button.module.scss'
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'

type ClassNameType = 'primary'

interface ButtonPropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: ClassNameType
}

export const Button: FC<ButtonPropsInterface> = ({
    children,
    className,
    ...otherProps
}) => {
    const finalClassName = classNames(
        styles.button,
        styles[className as ClassNameType]
    )

    return (
        <button className={finalClassName} {...otherProps}>
            {children}
        </button>
    )
}
