import { Fragment } from 'react'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { CloseButton } from '@headlessui/react'
import { PopoverElement } from './PopoverElement'

window.ResizeObserver = jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn()
}))

const items = ['1', '2', '3']
const trigger = <button>test</button>
const options = items.map((item) => (
    <li key={item}>
        <CloseButton as={Fragment}>
            <button>{item}</button>
        </CloseButton>
    </li>
))

describe('PopoverElement', () => {
    test('render', () => {
        render(<PopoverElement triggerButton={trigger} options={options} />)

        const popover = screen.getByTestId('popover')
        const button = screen.getByRole('button', { name: 'test' })
        expect(popover).toBeInTheDocument()
        expect(popover).toContainElement(button)
    })

    test('popover with special class', () => {
        render(
            <PopoverElement
                triggerButton={trigger}
                options={options}
                className='sort'
            />
        )

        const popover = screen.getByTestId('popover')
        const button = screen.getByRole('button', { name: 'test' })
        expect(popover).toBeInTheDocument()
        expect(popover).toContainElement(button)
        expect(popover).toHaveClass('sort')
    })

    test('popover opens when button is clicked and renders all options', async () => {
        const user = userEvent.setup()

        render(<PopoverElement triggerButton={trigger} options={options} />)

        const popover = screen.getByTestId('popover')
        const button = screen.getByRole('button', { name: 'test' })
        expect(popover).toBeInTheDocument()
        expect(popover).toContainElement(button)

        await user.click(button)

        const list = screen.getByRole('list')
        const renderedOptions = screen.getAllByRole('listitem')
        expect(popover).toHaveAttribute('data-headlessui-state', 'open')
        expect(list).toBeInTheDocument()
        expect(renderedOptions).toHaveLength(items.length)
    })

    test('popover item is active when it is hovered', async () => {
        const user = userEvent.setup()

        render(<PopoverElement triggerButton={trigger} options={options} />)

        const popover = screen.getByTestId('popover')
        const button = screen.getByRole('button', { name: 'test' })
        expect(popover).toBeInTheDocument()
        expect(popover).toContainElement(button)

        await user.click(button)

        const list = screen.getByRole('list')
        const renderedOptions = screen.getAllByRole('listitem')
        expect(popover).toHaveAttribute('data-headlessui-state', 'open')
        expect(list).toBeInTheDocument()
        expect(renderedOptions).toHaveLength(items.length)
        const firstOption = screen.getByRole('button', { name: '1' })

        await user.hover(firstOption)

        expect(firstOption).toHaveAttribute('data-headlessui-state', 'hover')
    })
})
