import { useState } from 'react'
import { MenuItem } from '@headlessui/react'
import { CustomButton, CustomLink, DropDown } from 'shared/ui'
import { ProfileIcon } from 'shared/assets'
import { OPTIONS } from '../../lib/const/options'
import type { FC } from 'react'

export const LoginDropDown: FC = () => {
    const [authorized] = useState(true)

    const dropdownOptions = OPTIONS.map((option) => {
        return (
            <MenuItem key={option.id} as='li'>
                {({ close }) => {
                    const handleLogOut = () => {
                        if (option.id === 'out') {
                            console.log('Вы вышли из системы!')
                        }
                        close()
                    }

                    return (
                        <CustomLink href={option.href} onClick={handleLogOut}>
                            {option.content}
                        </CustomLink>
                    )
                }}
            </MenuItem>
        )
    })

    const triggerContent = (
        <>
            <ProfileIcon title='Профиль' />
            <span>Профиль</span>
        </>
    )

    const buttonCondition = authorized ? (
        <DropDown
            component={CustomButton}
            options={dropdownOptions}
            triggerContent={triggerContent}
            buttonClassName='primary'
            className='login'
        />
    ) : (
        <CustomButton className='primary'>
            <ProfileIcon title='Профиль' />
            <span>Войти</span>
        </CustomButton>
    )

    return buttonCondition
}
