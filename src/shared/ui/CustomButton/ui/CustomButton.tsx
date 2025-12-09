import { memo } from 'react'
import classNames from 'classnames'
import styles from './CustomButton.module.scss'
import type { ButtonHTMLAttributes, FC, ReactNode, RefObject } from 'react'
import type { ButtonClassNameType } from '../lib/types/classNames'

interface ButtonPropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: ButtonClassNameType
    disabled?: boolean
    categoryActive?: boolean
    sortOptionActive?: boolean
    caloriesActive?: boolean
    buttonRef?: RefObject<HTMLButtonElement | null>
}

export const CustomButton: FC<ButtonPropsInterface> = memo(
    ({
        children,
        className,
        disabled,
        categoryActive,
        sortOptionActive,
        caloriesActive,
        buttonRef,
        ...otherProps
    }) => {
        const buttonClassName = classNames(
            styles.button,
            styles[className as ButtonClassNameType],
            {
                [styles.categoryActive]: categoryActive,
                [styles.sortArrowActive]: sortOptionActive,
                [styles.caloriesActive]: caloriesActive
            }
        )

        return (
            <button
                ref={buttonRef}
                className={buttonClassName}
                disabled={disabled}
                {...otherProps}
            >
                {children}
            </button>
        )
    }
)
