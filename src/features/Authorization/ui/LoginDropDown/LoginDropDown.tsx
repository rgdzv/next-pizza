import { CustomButton, DropDown } from 'shared/ui'
import { ProfileIcon, ShoppingCartIcon } from 'shared/assets'
import type { FC } from 'react'

export const LoginDropDown: FC = () => {
    const triggerContent = (
        <>
            <ProfileIcon title='Профиль' />
            <span>Войти</span>
        </>
    )

    return (
        <>
            <DropDown
                triggerContent={triggerContent}
                buttonClassName='primary'
            />
            <CustomButton className='primary'>
                <ShoppingCartIcon title='Корзина' />
            </CustomButton>
        </>
    )
}
