import { CustomButton, DropDown } from 'shared/ui'
import { ProfileIcon } from 'shared/assets'
import { useMemo, useState } from 'react'
import type { FC } from 'react'

export const LoginDropDown: FC = () => {
    const [authorized] = useState(true)

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

    const triggerContent = (
        <>
            <ProfileIcon title='Профиль' />
            <span>Профиль</span>
        </>
    )

    const buttonCondition = authorized ? (
        <DropDown
            triggerContent={triggerContent}
            buttonClassName='primary'
            options={options}
        />
    ) : (
        <CustomButton className='primary'>
            <ProfileIcon title='Профиль' />
            <span>Войти</span>
        </CustomButton>
    )

    return buttonCondition
}
