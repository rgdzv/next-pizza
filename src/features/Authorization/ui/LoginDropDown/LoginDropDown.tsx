import { DropDown } from 'shared/ui'
import { ProfileIcon } from 'shared/assets'
import { useMemo } from 'react'
import type { FC } from 'react'

export const LoginDropDown: FC = () => {
    const triggerContent = (
        <>
            <ProfileIcon title='Профиль' />
            <span>Профиль</span>
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
        <DropDown
            triggerContent={triggerContent}
            buttonClassName='primary'
            options={options}
        />
    )
}
