'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { CustomButton } from 'shared/ui/CustomButton/ui/CustomButton'
import { DarkThemeIcon, LightThemeIcon } from 'shared/assets'
import { Skeleton } from 'shared/ui/Skeleton/ui/Skeleton'

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    const handleClick = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    const iconCondition =
        theme === 'dark' ? (
            <DarkThemeIcon title='Темная тема' />
        ) : (
            <LightThemeIcon title='Светлая тема' />
        )

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <Skeleton className='themeSwitcherSkeleton' />
    }

    return (
        <>
            <CustomButton className='theme' onClick={handleClick}>
                {iconCondition}
            </CustomButton>
        </>
    )
}
