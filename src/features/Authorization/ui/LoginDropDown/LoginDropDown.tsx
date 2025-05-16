import { CustomButton, CustomLink, DropDown } from 'shared/ui'
import { ProfileIcon } from 'shared/assets'
import { Fragment, useState } from 'react'
import { MenuItem } from '@headlessui/react'
import { OPTIONS } from '../../lib/const/options'
import type { FC } from 'react'

export const LoginDropDown: FC = () => {
    const [authorized] = useState(true)

    const handleLogOut = () => {
        console.log('Вы вышли из системы!')
    }

    const triggerContent = (
        <>
            <ProfileIcon title='Профиль' />
            <span>Профиль</span>
        </>
    )

    const dropdownOptions = OPTIONS.map((option) => (
        <MenuItem key={option.id} as={Fragment}>
            <CustomLink
                href={option.href}
                className='option'
                onClick={option.id === 'out' ? handleLogOut : undefined}
            >
                {option.content}
            </CustomLink>
        </MenuItem>
    ))

    const buttonCondition = authorized ? (
        <DropDown triggerContent={triggerContent} options={dropdownOptions} />
    ) : (
        <CustomButton className='primary'>
            <ProfileIcon title='Профиль' />
            <span>Войти</span>
        </CustomButton>
    )

    return buttonCondition
}
