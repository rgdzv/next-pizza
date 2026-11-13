'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { MouseEvent, RefObject } from 'react'

interface UseDialogOptions {
    onClose?: () => void
}

interface UseDialogResult {
    isDialogOpen: boolean
    openDialog: () => void
    closeDialog: () => void
    dialogRef: RefObject<HTMLDialogElement | null>
    onBackdropClick: (e: MouseEvent<HTMLDialogElement>) => void
}

export const useDialog = (options: UseDialogOptions = {}): UseDialogResult => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const dialogRef = useRef<HTMLDialogElement>(null)
    const { onClose } = options

    const openDialog = useCallback(() => {
        setIsDialogOpen(true)
    }, [])
    const closeDialog = useCallback(() => {
        onClose?.()
        setIsDialogOpen(false)
    }, [onClose])

    const onBackdropClick = useCallback(
        (e: React.MouseEvent<HTMLDialogElement>) => {
            if (e.target === dialogRef.current) {
                closeDialog()
            }
        },
        [closeDialog]
    )

    useEffect(() => {
        const dialog = dialogRef.current

        if (!dialog) return

        const handleClose = () => {
            setIsDialogOpen(false)
        }

        const handleCancel = () => {
            onClose?.()
        }

        dialog.addEventListener('close', handleClose)
        dialog.addEventListener('cancel', handleCancel)

        if (isDialogOpen && !dialog.open) {
            dialog.showModal()
        } else if (!isDialogOpen && dialog.open) {
            dialog.close()
        }

        return () => {
            dialog.removeEventListener('close', handleClose)
            dialog.removeEventListener('cancel', handleCancel)
        }
    }, [isDialogOpen, onClose])

    return {
        isDialogOpen,
        openDialog,
        closeDialog,
        dialogRef,
        onBackdropClick
    }
}
