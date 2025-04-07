import classNames from 'classnames'
import styles from './CustomButton.module.scss'
import type { ClassNameType } from '../model/types/types'
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface ButtonPropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: ClassNameType
    disabled?: boolean
}

export const CustomButton: FC<ButtonPropsInterface> = ({
    children,
    className,
    disabled,
    ...otherProps
}) => {
    const finalClassName = classNames(
        styles.button,
        styles[className as ClassNameType]
    )

    return (
        <button className={finalClassName} disabled={disabled} {...otherProps}>
            {children}
        </button>
    )
}
