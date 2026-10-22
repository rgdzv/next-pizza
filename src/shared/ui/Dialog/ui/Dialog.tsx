import classNames from 'classnames'
import styles from './Dialog.module.scss'
import type { DialogVariantType } from '../lib/types/variants'
import type { DialogHTMLAttributes, FC, ReactNode, RefObject } from 'react'

interface DialogPropsInterface extends DialogHTMLAttributes<HTMLDialogElement> {
    children: ReactNode
    dialogRef: RefObject<HTMLDialogElement | null>
    variant?: DialogVariantType
}

export const Dialog: FC<DialogPropsInterface> = ({
    children,
    dialogRef,
    variant,
    ...otherProps
}) => {
    const dialogClassName = classNames(
        styles.dialog,
        variant && styles[variant]
    )

    return (
        <dialog ref={dialogRef} className={dialogClassName} {...otherProps}>
            {children}
        </dialog>
    )
}
