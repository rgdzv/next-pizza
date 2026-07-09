import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { MenuItem } from '@headlessui/react'
import { DropDown } from './DropDown'

window.ResizeObserver = jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn()
}))

const trigger = <button>Test</button>
const items = [
    {
        id: 'settings',
        content: 'Настройки',
        href: `/settings`
    },
    {
        id: 'orders',
        content: 'Заказы',
        href: `/orders`
    },
    {
        id: 'out',
        content: 'Выйти',
        href: `#`
    }
]

const options = items.map((option) => {
    const handleClick = jest.fn()
    return (
        <MenuItem key={option.id} as='li' onClick={handleClick}>
            {option.content}
        </MenuItem>
    )
})

describe('DropDown', () => {
    test('render', () => {
        render(<DropDown triggerButton={trigger} options={options} />)

        const dropdown = screen.getByTestId('dropdown')
        const button = screen.getByRole('button', { name: 'Test' })
        expect(dropdown).toBeInTheDocument()
        expect(dropdown).toContainElement(button)
    })

    test('dropdown with special class', () => {
        render(
            <DropDown
                triggerButton={trigger}
                options={options}
                className='login'
            />
        )

        const dropdown = screen.getByTestId('dropdown')
        const button = screen.getByRole('button', { name: 'Test' })
        expect(dropdown).toBeInTheDocument()
        expect(dropdown).toContainElement(button)
        expect(dropdown).toHaveClass('login')
    })

    test('dropdown opens when button is clicked and renders all options', async () => {
        const user = userEvent.setup()

        render(<DropDown triggerButton={trigger} options={options} />)

        const dropdown = screen.getByTestId('dropdown')
        const button = screen.getByRole('button', { name: 'Test' })
        expect(dropdown).toBeInTheDocument()
        expect(dropdown).toContainElement(button)

        await user.click(button)

        const menu = screen.getByRole('menu')
        const menuOptions = screen.getAllByRole('menuitem')
        expect(dropdown).toHaveAttribute('data-headlessui-state', 'open')
        expect(menu).toBeInTheDocument()
        expect(menuOptions).toHaveLength(items.length)
    })

    test('dropdown item is active when it is hovered', async () => {
        const user = userEvent.setup()

        render(<DropDown triggerButton={trigger} options={options} />)

        const dropdown = screen.getByTestId('dropdown')
        const button = screen.getByRole('button', { name: 'Test' })
        expect(dropdown).toBeInTheDocument()
        expect(dropdown).toContainElement(button)

        await user.click(button)

        const menu = screen.getByRole('menu')
        const menuOptions = screen.getAllByRole('menuitem')
        expect(dropdown).toHaveAttribute('data-headlessui-state', 'open')
        expect(menu).toBeInTheDocument()
        expect(menuOptions).toHaveLength(items.length)
        const firstOption = menuOptions[0]

        await user.hover(firstOption)

        expect(firstOption).toHaveAttribute(
            'data-headlessui-state',
            'active focus'
        )
    })
})
