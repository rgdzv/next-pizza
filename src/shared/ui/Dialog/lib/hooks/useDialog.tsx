'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { MouseEvent, RefObject } from 'react'

interface UseDialogResult {
    isDialogOpen: boolean
    openDialog: () => void
    closeDialog: () => void
    dialogRef: RefObject<HTMLDialogElement | null>
    onClickOutside: (e: MouseEvent<HTMLDialogElement>) => void
    onClickCloseButton: () => void
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

        if (isDialogOpen) {
            dialogRef.current.showModal()
        }
    }, [isDialogOpen])

    return {
        isDialogOpen,
        openDialog,
        closeDialog,
        dialogRef,
        onClickOutside,
        onClickCloseButton
    }
}
