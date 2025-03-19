import { CustomButton, DropDown } from 'shared/ui'
import { ProfileIcon } from 'shared/assets'
import type { FC } from 'react'

export const LoginDropDown: FC = () => {
    const buttonComponent = (
        <CustomButton className='primary'>
            <ProfileIcon title='Профиль' />
            <span>Войти</span>
        </CustomButton>
    )

    return <DropDown buttonComponent={buttonComponent} />
}
