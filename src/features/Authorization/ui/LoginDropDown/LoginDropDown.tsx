import { CustomButton, DropDown } from 'shared/ui'
import { ProfileIcon, ShoppingCartIcon } from 'shared/assets'
import { useMemo } from 'react'
import type { FC } from 'react'

export const LoginDropDown: FC = () => {
    const triggerContent = (
        <>
            <ProfileIcon title='Профиль' />
            <span>Войти</span>
        </>
    )

    const handleLogOut = () => {
        console.log('Вы вышли из системы!')
    }

    const options = useMemo(() => {
        return [
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
                href: `#`,
                onClick: handleLogOut
            }
        ]
    }, [])

    return (
        <>
            <DropDown
                triggerContent={triggerContent}
                buttonClassName='primary'
                options={options}
            />
            <CustomButton
                className='primary'
                onClick={() => {
                    console.log('Click!')
                }}
            >
                <ShoppingCartIcon title='Корзина' />
            </CustomButton>
        </>
    )
}
