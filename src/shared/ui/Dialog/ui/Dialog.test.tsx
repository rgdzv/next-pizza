import { createRef, useEffect } from 'react'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { useDialog } from '../lib/hooks/useDialog'
import { Dialog } from './Dialog'

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
beforeAll(() => {
    HTMLDialogElement.prototype.show = jest.fn(function () {
        this.open = true
    })

    HTMLDialogElement.prototype.showModal = jest.fn(function () {
        this.open = true
    })

    HTMLDialogElement.prototype.close = jest.fn(function () {
        this.open = false
    })
})

describe('Dialog', () => {
    test('render', () => {
        const ref = createRef<HTMLDialogElement>()

        render(
            <Dialog dialogRef={ref} onClick={jest.fn()} onClose={jest.fn()}>
                <div>Dialog content</div>
            </Dialog>
        )
        const dialog = screen.getByRole('dialog', { hidden: true })
        expect(dialog).toBeInTheDocument()
    })

    test('dialog with special class', () => {
        const ref = createRef<HTMLDialogElement>()

        render(
            <Dialog
                dialogRef={ref}
                onClick={jest.fn()}
                onClose={jest.fn()}
                className='sidebar'
            >
                <div>Dialog content</div>
            </Dialog>
        )
        const dialog = screen.getByRole('dialog', { hidden: true })
        expect(dialog).toBeInTheDocument()
        expect(dialog).toHaveClass('sidebar')
    })

    test('dialog opens and closes correctly by clicking buttons', async () => {
        const user = userEvent.setup()

        const WrapperComponent = () => {
            const {
                openDialog,
                closeDialog,
                dialogRef,
                onClickCloseButton,
                onClickOutside
            } = useDialog()

            return (
                <>
                    <button onClick={openDialog}>Open</button>
                    <button onClick={onClickCloseButton}>Close</button>
                    <Dialog
                        dialogRef={dialogRef}
                        onClose={closeDialog}
                        onClick={onClickOutside}
                    >
                        <div>Dialog content</div>
                    </Dialog>
                </>
            )
        }

        render(<WrapperComponent />)

        const dialog = screen.getByRole('dialog', { hidden: true })
        const openButton = screen.getByRole('button', { name: 'Open' })
        const closeButton = screen.getByRole('button', { name: 'Close' })
        expect(dialog).toBeInTheDocument()

        await user.click(openButton)
        expect(dialog).toHaveAttribute('open')

        await user.click(closeButton)
        expect(dialog).not.toHaveAttribute('open')
    })

    test('dialog closes correctly by clicking backdrop', async () => {
        const user = userEvent.setup()

        const WrapperComponent = () => {
            const {
                openDialog,
                closeDialog,
                dialogRef,
                onClickCloseButton,
                onClickOutside
            } = useDialog()

            return (
                <>
                    <button onClick={openDialog}>Open</button>
                    <button onClick={onClickCloseButton}>Close</button>
                    <Dialog
                        dialogRef={dialogRef}
                        onClose={closeDialog}
                        onClick={onClickOutside}
                    >
                        <div>Dialog content</div>
                    </Dialog>
                </>
            )
        }

        render(<WrapperComponent />)

        const dialog = screen.getByRole('dialog', { hidden: true })
        const openButton = screen.getByRole('button', { name: 'Open' })
        expect(dialog).toBeInTheDocument()

        await user.click(openButton)
        expect(dialog).toHaveAttribute('open')

        await user.click(dialog)
        expect(dialog).not.toHaveAttribute('open')
    })

    test('dialog closes correctly by pressing Escape', async () => {
        const user = userEvent.setup()

        const WrapperComponent = () => {
            const {
                openDialog,
                closeDialog,
                dialogRef,
                onClickCloseButton,
                onClickOutside
            } = useDialog()

            useEffect(() => {
                const handleKeyDown = (event: KeyboardEvent) => {
                    if (event.key === 'Escape') {
                        dialogRef.current?.close()
                    }
                }
                document.addEventListener('keydown', handleKeyDown)
                return () => {
                    document.removeEventListener('keydown', handleKeyDown)
                }
            }, [dialogRef])

            return (
                <>
                    <button onClick={openDialog}>Open</button>
                    <button onClick={onClickCloseButton}>Close</button>
                    <Dialog
                        dialogRef={dialogRef}
                        onClose={closeDialog}
                        onClick={onClickOutside}
                    >
                        <div>Dialog content</div>
                    </Dialog>
                </>
            )
        }

        render(<WrapperComponent />)

        const dialog = screen.getByRole('dialog', { hidden: true })
        const openButton = screen.getByRole('button', { name: 'Open' })
        expect(dialog).toBeInTheDocument()

        await user.click(openButton)
        expect(dialog).toHaveAttribute('open')

        await user.keyboard('{Escape}')
        expect(dialog).not.toHaveAttribute('open')
    })
})
