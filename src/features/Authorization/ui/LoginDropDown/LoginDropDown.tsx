import { useState } from 'react'
import { MenuItem } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { CustomButton, CustomLink, DropDown } from 'shared/ui'
import { ProfileIcon } from 'shared/assets'
import { OPTIONS } from '../../lib/const/options'
import type { KeyboardEvent } from 'react'
import type { FC } from 'react'

export const LoginDropDown: FC = () => {
    const [authorized] = useState(true)
    const router = useRouter()

    const handleLogOut = () => {
        console.log('Вы вышли из системы!')
    }

    const triggerContent = (
        <>
            <ProfileIcon title='Профиль' />
            <span>Профиль</span>
        </>
    )

    const dropdownOptions = OPTIONS.map((option) => {
        const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
            if (e.key === 'Enter') {
                e.preventDefault()
                router.push(option.href)
            }
        }
        return (
            <MenuItem key={option.id} as='li'>
                <CustomLink
                    href={option.href}
                    onClick={option.id === 'out' ? handleLogOut : undefined}
                    onKeyDown={handleKeyDown}
                >
                    {option.content}
                </CustomLink>
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
