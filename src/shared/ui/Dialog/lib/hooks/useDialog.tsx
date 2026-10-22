'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { MouseEvent, RefObject } from 'react'

interface UseDialogResult {
    isDialogOpen: boolean
    openDialog: () => void
    closeDialog: () => void
    dialogRef: RefObject<HTMLDialogElement | null>
    onBackdropClick: (e: MouseEvent<HTMLDialogElement>) => void
}

export const useDialog = (): UseDialogResult => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const dialogRef = useRef<HTMLDialogElement>(null)

    const openDialog = useCallback(() => {
        setIsDialogOpen(true)
    }, [])
    const closeDialog = useCallback(() => {
        setIsDialogOpen(false)
    }, [])

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

        if (isDialogOpen && !dialog.open) {
            dialog.showModal()
        } else if (!isDialogOpen && dialog.open) {
            dialog.close()
        }

        const handleClose = () => {
            setIsDialogOpen(false)
        }

        dialog.addEventListener('close', handleClose)

        return () => {
            dialog.removeEventListener('close', handleClose)
        }
    }, [isDialogOpen])

    return {
        isDialogOpen,
        openDialog,
        closeDialog,
        dialogRef,
        onBackdropClick
    }
}
