import classNames from 'classnames'
import styles from './Dialog.module.scss'
import type { FC, MouseEvent, ReactNode, RefObject } from 'react'

type ClassNameType = 'sidebar'

interface DialogPropsInterface {
    children: ReactNode
    closeModal: () => void
    dialogRef: RefObject<HTMLDialogElement | null>
    onClickOutside: (e: MouseEvent<HTMLDialogElement>) => void
    className?: ClassNameType
}

export const Dialog: FC<DialogPropsInterface> = ({
    children,
    dialogRef,
    // onClickOutside,
    closeModal,
    className
}) => {
    const finalClassName = classNames(
        styles.dialog,
        styles[className as ClassNameType]
    )

    return (
        <dialog
            ref={dialogRef}
            className={finalClassName}
            // onClick={onClickOutside}
            onClose={closeModal}
        >
            {children}
        </dialog>
    )
}
