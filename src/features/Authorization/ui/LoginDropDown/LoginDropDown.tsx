import { useState } from 'react'
import { MenuItem } from '@headlessui/react'
import { CustomButton, CustomLink, DropDown } from 'shared/ui'
import { ProfileIcon } from 'shared/assets'
import { OPTIONS } from '../../lib/const/options'
import type { FC } from 'react'

export const LoginDropDown: FC = () => {
    const [authorized] = useState(true)

    const triggerContent = (
        <>
            <ProfileIcon title='Профиль' />
            <span>Профиль</span>
        </>
    )

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
                    const onKeyDown = () => {
                        console.log('Вы нажали клавишу!')
                    }
                    return (
                        <CustomLink
                            href={option.href}
                            onClick={handleLogOut}
                            onKeyDown={onKeyDown}
                        >
                            {option.content}
                        </CustomLink>
                    )
                }}
            </MenuItem>
        )
    })

    const buttonCondition = authorized ? (
        <DropDown
            component={CustomButton}
            triggerContent={triggerContent}
            options={dropdownOptions}
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
