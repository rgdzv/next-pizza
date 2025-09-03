import { useState } from 'react'
import { MenuItem } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { CustomButton, DropDown } from 'shared/ui'
import { ProfileIcon } from 'shared/assets'
import { OPTIONS } from '../../lib/const/options'
import type { FC } from 'react'

export const LoginDropDown: FC = () => {
    const [authorized] = useState(true)
    const router = useRouter()

    const dropdownOptions = OPTIONS.map((option) => {
        const handleClick = () => {
            if (option.id === 'out') {
                console.log('Вы вышли из системы!')
            }
            router.push(option.href)
        }
        return (
            <MenuItem key={option.id} as='li' onClick={handleClick}>
                {option.content}
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
