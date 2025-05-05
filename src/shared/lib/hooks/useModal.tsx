import { useCallback, useEffect, useRef, useState } from 'react'
import type { MouseEvent, RefObject } from 'react'

interface UseModalResult {
    openModal: () => void
    closeModal: () => void
    dialogRef: RefObject<HTMLDialogElement | null>
    onClickOutside: (e: MouseEvent<HTMLDialogElement>) => void
    onClickCloseButton: () => void
}

export const useModal = (): UseModalResult => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dialogRef = useRef<HTMLDialogElement>(null)

    const openModal = (): void => {
        setIsModalOpen(true)
    }

    const closeModal = (): void => {
        setIsModalOpen(false)
    }

    const onClickOutside = useCallback(
        (e: MouseEvent<HTMLDialogElement>): void => {
            if (e.target === dialogRef.current) {
                dialogRef.current.close()
            }
        },
        []
    )

    const onClickCloseButton = useCallback(() => {
        dialogRef.current?.close()
    }, [])

    useEffect(() => {
        if (!dialogRef.current) return

        if (isModalOpen) {
            dialogRef.current.showModal()
        }
    }, [isModalOpen])

    return {
        openModal,
        closeModal,
        dialogRef,
        onClickOutside,
        onClickCloseButton
    }
}
