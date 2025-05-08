import classNames from 'classnames'
import styles from './Dialog.module.scss'
import type { FC, ReactNode, RefObject } from 'react'

type ClassNameType = 'sidebar'

interface DialogPropsInterface {
    children: ReactNode
    closeModal: () => void
    dialogRef: RefObject<HTMLDialogElement | null>
    className?: ClassNameType
}

export const Dialog: FC<DialogPropsInterface> = ({
    children,
    dialogRef,
    closeModal,
    className
}) => {
    const finalClassName = classNames(
        styles.dialog,
        styles[className as ClassNameType]
    )

    return (
        <dialog ref={dialogRef} className={finalClassName} onClose={closeModal}>
            {children}
        </dialog>
    )
}
